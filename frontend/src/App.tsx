//React Imports
import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  type RefObject,
} from "react";
//MapLibre, react map gl + Geographic Imports
import type { Feature, Point } from "geojson";
import * as pmtiles from "pmtiles";
import "maplibre-gl/dist/maplibre-gl.css";
import * as maplibregl from "maplibre-gl";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
maplibregl.setWorkerUrl(maplibreWorkerUrl);
import Map, {
  Source,
  Layer,
  Marker,
  NavigationControl,
  type MapLayerMouseEvent,
  type MapRef,
  type MapSourceDataEvent,
} from "react-map-gl/maplibre";

//Local Geographic Assets
import { useDebouncedValue } from "@mantine/hooks";
import { useCounties, usePitches, useClubSearch } from "./api";
import type { CountyDto, PitchMarkerDto } from "./api";

//styling components
import classes from "./App.module.css";
import "@mantine/core/styles.css";
import {
  AppShell,
  Title,
  Group,
  Burger,
  ActionIcon,
  Autocomplete,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import AppNavbar, { PagePlaceholder, type Page } from "./AppNavbar";
import { useDisclosure } from "@mantine/hooks";
import { SunIcon, MoonIcon, MapPinIcon } from "@phosphor-icons/react";

const geoUrl = "/ireland-counties.json";
const pmtilesprotocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", pmtilesprotocol.tile);

interface MapViewState {
  center: [number, number];
  zoom: number;
}
const EMPTY_COUNTIES: Record<string, CountyDto> = {};
const EMPTY_PITCHES: PitchMarkerDto[] = [];

const defaultMapState: MapViewState = { center: [-7.1, 53.3], zoom: 5.3 };

const MIN_ZOOM = 4.5;
const MAX_ZOOM = 18;

const CLUSTER_MAX_VISIBLE_ZOOM = 14;
const CLUSTER_RADIUS_PX = 20;
const CLUSTER_PULSE_PERIOD_MS = 3000;
const CLUSTER_PULSE_GROWTH_PX = 24;
const CLUSTER_PULSE_LAYERS = ["cluster-pulse-a", "cluster-pulse-b"];
const CLUSTER_RADIUS_EXPR: maplibregl.ExpressionSpecification = [
  "step",
  ["get", "point_count"],
  14,
  10,
  18,
  30,
  24,
];

const MAP_BOUNDS: [number, number, number, number] = [-13.5, 50.4, -3.5, 56.2];

const MAP_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {},
  layers: [
    {
      id: "background",
      type: "background",
      paint: { "background-color": "#00f8f800" },
    },
  ],
};

interface CountyGeoProperties {
  NAME_1?: string;
  name?: string;
  COUNTY?: string;
}

function HoverTooltip({
  frameRef,
  label,
}: {
  frameRef: RefObject<HTMLDivElement | null>;
  label: string | null;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    node.addEventListener("mousemove", handleMove);
    return () => node.removeEventListener("mousemove", handleMove);
  }, [frameRef]);

  if (!label) return null;

  return (
    <div
      className={classes.hoverTooltip}
      style={{
        position: "fixed",
        left: `${pos.x + 20}px`,
        top: `${pos.y - 45}px`,
        padding: "6px 12px",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "sans-serif",
        pointerEvents: "none",
      }}
    >
      <p>{label}</p>
    </div>
  );
}

function buildColourExpr(
  counties: Record<string, CountyDto>,
  pick: (c: CountyDto) => string | null | undefined,
  fallback: string,
): maplibregl.ExpressionSpecification {
  const entries = Object.entries(counties);
  if (entries.length === 0)
    return fallback as unknown as maplibregl.ExpressionSpecification;
  const expr: unknown[] = ["match", ["get", "NAME_1"]];
  entries.forEach(([name, cfg]) => expr.push(name, pick(cfg) ?? fallback));
  expr.push(fallback);
  return expr as unknown as maplibregl.ExpressionSpecification;
}

function getColorLuminance(color: string): number | null {
  const match = color.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
  if (!match) return null;

  const hex = match[1].length === 3
    ? [...match[1]].map((channel) => channel + channel).join("")
    : match[1];
  const channels = [0, 2, 4].map((index) => {
    const value = parseInt(hex.slice(index, index + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function getContrastingColor(
  color: string,
  navy: string,
  lightBlue: string,
): string {
  const backgroundLuminance = getColorLuminance(color);
  if (backgroundLuminance === null) return navy;

  const contrastRatio = (foreground: string) => {
    const foregroundLuminance = getColorLuminance(foreground) ?? 0;
    const lighter = Math.max(backgroundLuminance, foregroundLuminance);
    const darker = Math.min(backgroundLuminance, foregroundLuminance);
    return (lighter + 0.05) / (darker + 0.05);
  };

  return contrastRatio(navy) >= contrastRatio(lightBlue) ? navy : lightBlue;
}

function getCoordinateBounds(coordinates: unknown): maplibregl.LngLatBounds | null {
  const bounds = new maplibregl.LngLatBounds();
  let hasCoordinates = false;

  const extend = (value: unknown) => {
    if (!Array.isArray(value)) return;
    if (typeof value[0] === "number" && typeof value[1] === "number") {
      bounds.extend([value[0], value[1]]);
      hasCoordinates = true;
      return;
    }
    value.forEach(extend);
  };

  extend(coordinates);
  return hasCoordinates ? bounds : null;
}

const IS_ACTIVE = [
  "any",
  ["boolean", ["feature-state", "hover"], false],
  ["boolean", ["feature-state", "clicked"], false],
];

export default function App() {
  const mapFrameRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapRef | null>(null);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDarkMode = colorScheme === "dark";
  const [clusterColor, setClusterColor] = useState(() =>
    getComputedStyle(document.documentElement)
      .getPropertyValue("--mantine-primary-color-light")
      .trim() || theme.colors[theme.primaryColor][1],
  );

  useEffect(() => {
    const activeBackground = getComputedStyle(document.documentElement)
      .getPropertyValue("--mantine-primary-color-light")
      .trim();
    if (activeBackground) setClusterColor(activeBackground);
  }, [colorScheme, theme.primaryColor]);

  const hoveredFeatureIdRef = useRef<string | number | null>(null);
  const clickedFeatureIdRef = useRef<string | number | null>(null);

  useEffect(() => {
    const node = mapFrameRef.current;
    if (!node) return;
    const preventPinchZoom = (event: WheelEvent) => {
      if (event.ctrlKey) event.preventDefault();
    };
    node.addEventListener("wheel", preventPinchZoom, { passive: false });
    return () => node.removeEventListener("wheel", preventPinchZoom);
  }, []);

  const [clickedCounty, setClickedCounty] = useState<string | null>(null);
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);

  useEffect(() => {
    if (!clickedCounty) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const animate = (now: number) => {
      const map = mapRef.current?.getMap();
      if (map) {
        CLUSTER_PULSE_LAYERS.forEach((id, index) => {
          if (!map.getLayer(id)) return;
          const phase = (now / CLUSTER_PULSE_PERIOD_MS + index * 0.5) % 1;
          const pulse = Math.sin(Math.PI * phase);
          map.setPaintProperty(id, "circle-radius", [
            "+",
            CLUSTER_RADIUS_EXPR,
            phase * CLUSTER_PULSE_GROWTH_PX,
          ]);
          map.setPaintProperty(id, "circle-stroke-opacity", pulse * 0.95);
        });
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [clickedCounty, clusterColor]);

  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] =
    useDisclosure(false);
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    const t = window.setTimeout(() => mapRef.current?.resize(), 250);
    return () => window.clearTimeout(t);
  }, [mobileOpened, page]);

  const { data: gaaCounties = EMPTY_COUNTIES } = useCounties();
  const { data: filteredPitches = EMPTY_PITCHES } = usePitches(clickedCounty);

  const [mapViewport, setMapViewState] =
    useState<MapViewState>(defaultMapState);
  const [hoveredClub, setHoveredClub] = useState<string | null>(null);
  type PitchMarker = { id: number; club: string; lng: number; lat: number };
  const [unclusteredPitches, setUnclusteredPitches] = useState<PitchMarker[]>(
    [],
  );

  const pitchById = useMemo(
    () => new window.Map(filteredPitches.map((p) => [p.id, p])),
    [filteredPitches],
  );

  const refreshUnclusteredMarkers = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map || !clickedCounty || !map.getSource("pitches-source")) {
      setUnclusteredPitches([]);
      return;
    }

    const raw = map.querySourceFeatures("pitches-source", {
      filter: ["!", ["has", "point_count"]],
    });

    const seen = new Set<number>();
    const next: PitchMarker[] = [];
    for (const f of raw) {
      const id = f.properties?.id as number;
      if (seen.has(id)) continue;
      const p = pitchById.get(id);
      if (!p || p.club !== f.properties?.club) continue;
      seen.add(id);
      next.push({ id, club: p.club, lng: p.lng, lat: p.lat });
    }
    setUnclusteredPitches((prev) =>
      prev.length === next.length && prev.every((p, i) => p.id === next[i].id)
        ? prev
        : next,
    );
  }, [clickedCounty, pitchById]);

  const onPitchSourceData = useCallback(
    (event: MapSourceDataEvent) => {
      if (event.sourceId === "pitches-source" && event.isSourceLoaded) {
        refreshUnclusteredMarkers();
      }
    },
    [refreshUnclusteredMarkers],
  );

  const activeCountyName = clickedCounty || hoveredCounty;
  const activeConfig = activeCountyName ? gaaCounties[activeCountyName] : null;
  const clusterContrastColor = getContrastingColor(
    activeConfig?.primaryColor ?? "#cbd5e1",
    theme.colors[theme.primaryColor][9],
    theme.colors[theme.primaryColor][2],
  );
  const clusterPulsePaint = useMemo(
    () =>
      ({
        "circle-color": clusterColor,
        "circle-radius": ["+", CLUSTER_RADIUS_EXPR, 8],
        "circle-blur": 0.15,
        "circle-opacity": 0,
        "circle-stroke-color": clusterContrastColor,
        "circle-stroke-width": 2.5,
        "circle-stroke-opacity": 0.85,
      }) as unknown as maplibregl.CircleLayerSpecification["paint"],
    [clusterColor, clusterContrastColor],
  );
  const clusterPaint = useMemo(
    () =>
      ({
        "circle-color": clusterColor,
        "circle-radius": CLUSTER_RADIUS_EXPR,
        "circle-stroke-color": clusterContrastColor,
        "circle-stroke-width": 2,
      }) as unknown as maplibregl.CircleLayerSpecification["paint"],
    [clusterColor, clusterContrastColor],
  );

  const countyColorMatchExpr = useMemo(
    () => buildColourExpr(gaaCounties, (c) => c.primaryColor, "#cbd5e1"),
    [gaaCounties],
  );
  const countySecondaryExpr = useMemo(
    () => buildColourExpr(gaaCounties, (c) => c.secondaryColor, "#94a3b8"),
    [gaaCounties],
  );
  // no third colour -> use the secondary, so the inner line blends into the band
  const countyTertiaryExpr = useMemo(
    () =>
      buildColourExpr(
        gaaCounties,
        (c) => c.tertiaryColor ?? c.secondaryColor,
        "#94a3b8",
      ),
    [gaaCounties],
  );

  const countyFillPaint = useMemo<maplibregl.FillLayerSpecification["paint"]>(
    () => ({
      "fill-color": [
        "case",
        [
          "any",
          ["boolean", ["feature-state", "hover"], false],
          ["boolean", ["feature-state", "clicked"], false],
        ],
        countyColorMatchExpr,
        isDarkMode ? "#1e293b" : "#e7e8e7",
      ] as unknown as maplibregl.ExpressionSpecification,
      "fill-opacity": isDarkMode ? 0.5 : 0.75,
    }),
    [countyColorMatchExpr, isDarkMode],
  );

  const roadPaintStyles = useMemo(() => {
    return {
      motorway: isDarkMode ? "#475569" : "#cbd5e1", // Muted slate gray vs deep navy line profile
      national: isDarkMode ? "#334155" : "#e2e8f0",
      boreen: isDarkMode ? "#1e293b" : "#c1c1c1",
      outline: isDarkMode ? "#475569" : "#374151", // 🌟 Dynamic color for your county outlines!
    };
  }, [isDarkMode]);

  const kitBandPaint = useMemo(
    () =>
      ({
        "line-color": countySecondaryExpr,
        "line-width": ["case", IS_ACTIVE, 5, 0],
        "line-opacity": 0.5,
      }) as unknown as maplibregl.LineLayerSpecification["paint"],
    [countySecondaryExpr],
  );
  const kitCorePaint = useMemo(
    () =>
      ({
        "line-color": countyTertiaryExpr,
        "line-width": ["case", IS_ACTIVE, 2.5, 0],
        "line-opacity": 0.5,
      }) as unknown as maplibregl.LineLayerSpecification["paint"],
    [countyTertiaryExpr],
  );

  const initialViewState = useMemo(
    () => ({
      bounds: MAP_BOUNDS,
      fitBoundsOptions: {
        padding: 40,
        maxZoom: 7,
      },
    }),
    [],
  );

  const pitchGeoJson = useMemo(
    () => ({
      type: "FeatureCollection" as const,
      features: filteredPitches.map((p) => ({
        type: "Feature" as const,
        properties: { id: p.id, club: p.club, county: p.county },
        geometry: { type: "Point" as const, coordinates: [p.lng, p.lat] },
      })),
    }),
    [filteredPitches],
  );

  const interactiveLayerIds = useMemo(() => {
    const ids = ["county-fill"];
    if (clickedCounty) ids.push("clustered-circles");
    return ids;
  }, [clickedCounty]);

  const resetToCountyView = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map || !clickedCounty) return;
    const countyConfig = gaaCounties[clickedCounty];
    if (!countyConfig) return;
    map.flyTo({
      center: countyConfig.center,
      zoom: countyConfig.zoom,
      duration: 600,
      essential: true,
    });
  }, [clickedCounty, gaaCounties]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") resetToCountyView();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [resetToCountyView]);

  const onMapHover = useCallback((event: MapLayerMouseEvent) => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    const feature = event.features?.find((f) => f.layer?.id === "county-fill");

    if (
      hoveredFeatureIdRef.current !== null &&
      hoveredFeatureIdRef.current !== feature?.id
    ) {
      map.setFeatureState(
        { source: "counties", id: hoveredFeatureIdRef.current },
        { hover: false },
      );
    }

    if (feature) {
      map.setFeatureState(
        { source: "counties", id: feature.id },
        { hover: true },
      );
      hoveredFeatureIdRef.current = feature.id ?? null;
      const props = feature.properties as CountyGeoProperties | undefined;
      setHoveredCounty(props?.NAME_1 ?? props?.name ?? props?.COUNTY ?? null);
    } else {
      hoveredFeatureIdRef.current = null;
      setHoveredCounty(null);
    }
  }, []);

  const onMapMouseLeave = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (map && hoveredFeatureIdRef.current !== null) {
      map.setFeatureState(
        { source: "counties", id: hoveredFeatureIdRef.current },
        { hover: false },
      );
    }
    hoveredFeatureIdRef.current = null;
    setHoveredCounty(null);
  }, []);

  const onMapClick = useCallback(
    (event: MapLayerMouseEvent) => {
      const map = mapRef.current?.getMap();
      if (!map) return;

      const clusterFeature = event.features?.find(
        (f) => f.layer?.id === "clustered-circles",
      );
      if (clusterFeature) {
        const clusterId = clusterFeature.properties?.cluster_id;
        const source = map.getSource(
          "pitches-source",
        ) as maplibregl.GeoJSONSource;
        source.getClusterExpansionZoom(clusterId).then((zoom) => {
          map.easeTo({
            center: (
              clusterFeature.geometry as unknown as {
                coordinates: [number, number];
              }
            ).coordinates as [number, number],
            zoom,
            duration: 500,
            essential: true,
          });
        });
        return;
      }

      const countyFeature = event.features?.find(
        (f) => f.layer?.id === "county-fill",
      );
      if (!countyFeature) return;
      const props = countyFeature.properties as CountyGeoProperties | undefined;
      const countyName = props?.NAME_1 ?? props?.name ?? props?.COUNTY;
      if (!countyName) return;

      if (clickedFeatureIdRef.current !== null) {
        map.setFeatureState(
          { source: "counties", id: clickedFeatureIdRef.current },
          { clicked: false },
        );
      }

      if (clickedCounty === countyName) {
        setClickedCounty(null);
        clickedFeatureIdRef.current = null;
        map.flyTo({
          center: defaultMapState.center,
          zoom: defaultMapState.zoom,
          duration: 600,
          essential: true,
        });
        return;
      }

      map.setFeatureState(
        { source: "counties", id: countyFeature.id },
        { clicked: true },
      );
      clickedFeatureIdRef.current = countyFeature.id ?? null;
      setClickedCounty(countyName);

      const countyConfig = gaaCounties[countyName];
      const geometry = countyFeature.geometry as { coordinates?: unknown };
      const countyBounds = getCoordinateBounds(geometry.coordinates);
      if (countyBounds) {
        map.fitBounds(countyBounds, {
          padding: 60,
          maxZoom: 9,
          duration: 800,
          essential: true,
        });
      } else if (countyConfig?.center) {
        map.flyTo({
          center: countyConfig.center,
          zoom: countyConfig.zoom,
          duration: 800,
          essential: true,
        });
      }
    },
    [clickedCounty, gaaCounties],
  );

  const countyBaseZoom = clickedCounty
    ? (gaaCounties[clickedCounty]?.zoom ?? defaultMapState.zoom)
    : defaultMapState.zoom;
  const showResetButton =
    !!clickedCounty && mapViewport.zoom > countyBaseZoom + 0.5;

  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 250);
  const { data: clubResults = [] } = useClubSearch(debouncedQuery);
  const clubOptions = useMemo(
    () =>
      clubResults.map((c) => ({
        value: String(c.id),
        label: `${c.name} (${c.county})`,
      })),
    [clubResults],
  );

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between" wrap="nowrap">
          <Group wrap="nowrap">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <Title order={3}>GAA Stór</Title>
          </Group>
          <Group wrap="nowrap">
            <Autocomplete
              placeholder="Search clubs..."
              data={clubOptions}
              value={query}
              onChange={setQuery}
              filter={({ options }) => options} // the server already filtered
              onOptionSubmit={(id) => {
                const club = clubResults.find((c) => String(c.id) === id);
                if (!club) return;
                setQuery(club.name);
                setClickedCounty(club.county);
                const first = club.pitches[0];
                if (first) {
                  mapRef.current?.getMap()?.flyTo({
                    center: [first.lng, first.lat],
                    zoom: CLUSTER_MAX_VISIBLE_ZOOM + 1,
                    duration: 1200,
                  });
                }
              }}
              limit={8}
              comboboxProps={{ shadow: "md" }}
            />
            <ActionIcon
              onClick={toggleColorScheme}
              variant="default"
              size="xl"
              aria-label="Toggle color scheme"
              className={classes.themeToggleBtn}
            >
              <SunIcon size={22} weight="fill" className={classes.iconSun} />
              <MoonIcon size={22} weight="fill" className={classes.iconMoon} />
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppNavbar
          page={page}
          onNavigate={(p) => {
            setPage(p);
            closeMobile();
          }}
          onLogout={() => console.log("log out")}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <div hidden={page !== "home"}>
          <div className={classes.layout}>
            <section className={classes.mapCol}>
              <div className={classes.mapFrame} ref={mapFrameRef}>
                {showResetButton && (
                  <button
                    type="button"
                    className={classes.resetViewButton}
                    onClick={resetToCountyView}
                  >
                    Reset County View
                  </button>
                )}

                <Map
                  ref={mapRef}
                  initialViewState={initialViewState}
                  minZoom={MIN_ZOOM}
                  maxZoom={MAX_ZOOM}
                  mapLib={maplibregl}
                  mapStyle={MAP_STYLE}
                  maxBounds={MAP_BOUNDS}
                  interactiveLayerIds={interactiveLayerIds}
                  onClick={onMapClick}
                  onMouseMove={onMapHover}
                  onMouseLeave={onMapMouseLeave}
                  onMoveEnd={(evt) => {
                    setMapViewState({
                      center: [evt.viewState.longitude, evt.viewState.latitude],
                      zoom: evt.viewState.zoom,
                    });
                    refreshUnclusteredMarkers();
                  }}
                  onSourceData={onPitchSourceData}
                  onIdle={refreshUnclusteredMarkers}
                >
                  <NavigationControl position="top-left" showCompass={false} />

                  <Source id="counties" type="geojson" data={geoUrl} generateId>
                    <Layer
                      id="county-fill"
                      type="fill"
                      paint={countyFillPaint}
                    />
                    <Layer
                      id="county-outline"
                      type="line"
                      paint={{
                        "line-color": roadPaintStyles.outline,
                        "line-width": 0.75,
                        "line-opacity": isDarkMode ? 0.5 : 0.75,
                      }}
                    />
                    <Layer
                      id="county-kit-band"
                      type="line"
                      paint={kitBandPaint}
                      layout={{ "line-join": "round" }}
                    />
                    <Layer
                      id="county-kit-core"
                      type="line"
                      paint={kitCorePaint}
                      layout={{ "line-join": "round" }}
                    />
                  </Source>

                  <Source
                    id="roads"
                    type="vector"
                    url="pmtiles:///roads.pmtiles"
                  >
                    <Layer
                      id="roads-motorway"
                      type="line"
                      source-layer="roads"
                      filter={["==", ["get", "road_tier"], "motorway"]}
                      minzoom={0}
                      layout={{ "line-cap": "round", "line-join": "round" }}
                      paint={{
                        "line-color": roadPaintStyles.motorway,
                        "line-width": [
                          "interpolate",
                          ["linear"],
                          ["zoom"],
                          5,
                          1.2,
                          12,
                          3,
                        ],
                      }}
                    />
                    <Layer
                      id="roads-national"
                      type="line"
                      source-layer="roads"
                      filter={["==", ["get", "road_tier"], "national"]}
                      minzoom={7}
                      layout={{ "line-cap": "round", "line-join": "round" }}
                      paint={{
                        "line-color": roadPaintStyles.national,
                        "line-width": [
                          "interpolate",
                          ["linear"],
                          ["zoom"],
                          7,
                          0.8,
                          14,
                          2.2,
                        ],
                      }}
                    />
                    <Layer
                      id="roads-boreen"
                      type="line"
                      source-layer="roads"
                      filter={["==", ["get", "road_tier"], "boreen"]}
                      minzoom={11}
                      layout={{ "line-cap": "round", "line-join": "round" }}
                      paint={{
                        "line-color": roadPaintStyles.boreen,
                        "line-width": [
                          "interpolate",
                          ["linear"],
                          ["zoom"],
                          11,
                          0.4,
                          16,
                          1.4,
                        ],
                      }}
                    />
                  </Source>
                  {clickedCounty && (
                    <Source
                      id="pitches-source"
                      type="geojson"
                      data={pitchGeoJson}
                      cluster={true}
                      clusterMaxZoom={CLUSTER_MAX_VISIBLE_ZOOM}
                      clusterRadius={CLUSTER_RADIUS_PX}
                    >
                      {CLUSTER_PULSE_LAYERS.map((id) => (
                        <Layer
                          key={id}
                          id={id}
                          type="circle"
                          filter={["has", "point_count"]}
                          paint={clusterPulsePaint}
                        />
                      ))}
                      <Layer
                        id="clustered-circles"
                        type="circle"
                        filter={["has", "point_count"]}
                        paint={clusterPaint}
                      />
                      <Layer
                        id="cluster-counts"
                        type="symbol"
                        filter={["has", "point_count"]}
                        layout={{
                          "text-field": ["get", "point_count_abbreviated"],
                          "text-size": 12,
                        }}
                        paint={{ "text-color": "#111827" }}
                      />
                    </Source>
                  )}

                  {unclusteredPitches.map(({ id, club, lng, lat }) => {
                    const isCurrentHovered = hoveredClub === club;
                    return (
                      <Marker
                        key={id}
                        longitude={lng}
                        latitude={lat}
                        anchor="bottom"
                        onClick={(e) => {
                          e.originalEvent.stopPropagation();
                          console.log("Clicked pitch:", club);
                        }}
                      >
                        <div
                          className={classes.pitchMarkerPin}
                          style={{
                            display: "inline-block",
                            cursor: "pointer",
                            transformOrigin: "bottom center",
                            transform: isCurrentHovered
                              ? "scale(1.25)"
                              : "scale(1)",
                            transition: "transform 0.15s ease-in-out",
                            filter: `drop-shadow(0 0 2px ${clusterContrastColor})`,
                          }}
                          onMouseEnter={() => setHoveredClub(club)}
                          onMouseLeave={() => setHoveredClub(null)}
                        >
                          <MapPinIcon
                            size={28}
                            weight={isCurrentHovered ? "fill" : "regular"}
                            aria-label={club}
                            className={classes.pitchMarkerIcon}
                          />
                        </div>
                      </Marker>
                    );
                  })}
                </Map>

                <HoverTooltip
                  frameRef={mapFrameRef}
                  label={!clickedCounty ? hoveredCounty : null}
                />
                <HoverTooltip
                  frameRef={mapFrameRef}
                  label={clickedCounty ? hoveredClub : null}
                />
                <div className={classes.statusPanel}>
                  {clickedCounty ? (
                    <p>
                      Viewing{" "}
                      <span className={classes.textHighlight}>
                        {clickedCounty}
                      </span>{" "}
                      — {filteredPitches.length} Pitches Loaded. Click again to
                      zoom out.
                    </p>
                  ) : (
                    <p>
                      Inspecting:{" "}
                      <span className={classes.textHighlight}>
                        {hoveredCounty || "None"}
                      </span>{" "}
                      | Click a county to enlarge
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

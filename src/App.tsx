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
import unHoveredPitchIcon from "./assets/pin-drop-outline-rounded.svg";
import hoveredPitchIcon from "./assets/pin-drop-rounded.svg";

//Local Geographic Assets
import { gaaCounties } from "../public/county_assets";
import { countyPitchAssets } from "../public/county_pitch_assets";
import type { PitchWithCoords } from "../public/county_pitch_assets";
//styling components
import "./App.css";
import "@mantine/core/styles.css";
import {
  MantineProvider,
  createTheme,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import cx from "clsx";

const geoUrl = "/ireland-counties.json";
const pmtilesprotocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", pmtilesprotocol.tile);

interface MapViewState {
  center: [number, number];
  zoom: number;
}

const defaultMapState: MapViewState = { center: [-7.1, 53.4], zoom: 6.0 };

const MIN_ZOOM = 5.5;
const MAX_ZOOM = 18;

const CLUSTER_MAX_VISIBLE_ZOOM = 15;
const CLUSTER_RADIUS_PX = 40;

const MAP_BOUNDS: [number, number, number, number] = [-11.5, 51.0, -5.0, 55.6];

const MAP_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {},
  layers: [
    {
      id: "background",
      type: "background",
      paint: { "background-color": "#1e293b" },
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
      className="county-hover-popup"
      style={{
        position: "fixed",
        left: `${pos.x + 20}px`,
        top: `${pos.y - 45}px`,
        backgroundColor: "#1f2937",
        color: "#ffffff",
        padding: "6px 12px",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "sans-serif",
        border: "1px solid #4b5563",
        pointerEvents: "none",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      }}
    >
      <p>{label}</p>
    </div>
  );
}

export default function App() {
  const mapFrameRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapRef | null>(null);

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
  const [filteredPitches, setFilteredPitches] = useState<PitchWithCoords[]>([]);
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
      // guard against a stale source right after switching counties
      if (!p || p.Club !== f.properties?.club) continue;
      seen.add(id);
      next.push({ id, club: p.Club, lng: p.lng, lat: p.lat });
    }
    setUnclusteredPitches(next);
  }, [clickedCounty, filteredPitches]);

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

  const countyColorMatchExpr = useMemo(() => {
    const expr: unknown[] = ["match", ["get", "NAME_1"]];
    Object.entries(gaaCounties).forEach(([name, cfg]) => {
      expr.push(name, cfg.primaryColor);
    });
    expr.push("#cbd5e1"); // fallback for any county with no config
    return expr as unknown as maplibregl.ExpressionSpecification;
  }, []);

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
        "#cbd5e1",
      ] as unknown as maplibregl.ExpressionSpecification,
      "fill-opacity": 0.9,
    }),
    [countyColorMatchExpr],
  );

  const initialViewState = useMemo(
    () => ({
      bounds: MAP_BOUNDS,
      fitBoundsOptions: {
        padding: 40, // Keeps a 20px gap from the edge of the map container
        maxZoom: 7, // Caps how close it zooms in on large 4K screens at launch
      },
    }),
    [],
  );

  const pitchGeoJson = useMemo(
    () => ({
      type: "FeatureCollection" as const,
      features: filteredPitches.map((p) => ({
        type: "Feature" as const,
        properties: { id: p.id, club: p.Club, county: p.County },
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
  }, [clickedCounty]);

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

      // 1. Cluster bubble — ask Supercluster (via the GL source) what zoom
      // level would split it apart, then fly there. This is the native
      // equivalent of the old CLUSTER_CLICK_ZOOM_FACTOR re-clustering.
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

      // 2. County polygon.
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
        setFilteredPitches([]);
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

      const pitches: PitchWithCoords[] = countyPitchAssets
        .filter(
          (p) =>
            p.County?.trim().toLowerCase() === countyName.trim().toLowerCase(),
        )
        .map((p) => ({
          ...p,
          lat: parseFloat(p.Latitude),
          lng: parseFloat(p.Longitude),
        }))
        .filter((p) => !Number.isNaN(p.lat) && !Number.isNaN(p.lng));
      setFilteredPitches(pitches);

      const countyConfig = gaaCounties[countyName];
      if (countyConfig?.center) {
        map.flyTo({
          center: countyConfig.center,
          zoom: countyConfig.zoom,
          duration: 800,
          essential: true,
        });
      }
    },
    [clickedCounty],
  );

  const countyBaseZoom = clickedCounty
    ? (gaaCounties[clickedCounty]?.zoom ?? defaultMapState.zoom)
    : defaultMapState.zoom;
  const showResetButton =
    !!clickedCounty && mapViewport.zoom > countyBaseZoom + 0.5;

  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <div className="page">
        <header className="page-header">
          <h1>GAA Stór</h1>
          <ActionIcon
            onClick={() => {
              const current = document.documentElement.getAttribute(
                "data-mantine-color-scheme",
              );
              const next = current === "dark" ? "light" : "dark";
              document.documentElement.setAttribute(
                "data-mantine-color-scheme",
                next,
              );
            }}
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
            className="theme-toggle-btn"
          >
            {/* ✅ FIXED: Removed cx() and classes. references entirely */}
            <SunIcon size={22} className="icon-sun" />
            <MoonIcon size={22} className="icon-moon" />
          </ActionIcon>
        </header>

        <div className="layout">
          <section className="map-col">
            <div className="map-frame" ref={mapFrameRef}>
              {showResetButton && (
                <button
                  type="button"
                  className="reset-view-button"
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
              >
                <NavigationControl position="top-left" showCompass={false} />

                <Source id="counties" type="geojson" data={geoUrl} generateId>
                  <Layer id="county-fill" type="fill" paint={countyFillPaint} />
                  <Layer
                    id="county-outline"
                    type="line"
                    paint={{ "line-color": "#374151", "line-width": 0.75 }}
                  />
                </Source>

                <Source id="roads" type="vector" url="pmtiles:///roads.pmtiles">
                  <Layer
                    id="roads-motorway"
                    type="line"
                    source-layer="roads"
                    filter={["==", ["get", "road_tier"], "motorway"]}
                    minzoom={0}
                    layout={{ "line-cap": "round", "line-join": "round" }}
                    paint={{
                      "line-color": "#cbd5e1",
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
                      "line-color": "#e2e8f0",
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
                      "line-color": "#6b7280",
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
                    <Layer
                      id="clustered-circles"
                      type="circle"
                      filter={["has", "point_count"]}
                      paint={{
                        "circle-color": "#f97316",
                        "circle-radius": [
                          "step",
                          ["get", "point_count"],
                          14,
                          10,
                          18,
                          30,
                          24,
                        ],
                        "circle-stroke-width": 1,
                        "circle-stroke-color": "#ffffff",
                      }}
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
                        className="pitch-marker-pin"
                        style={{
                          display: "inline-block",
                          cursor: "pointer",
                          transformOrigin: "bottom center",
                          transform: isCurrentHovered
                            ? "scale(1.25)"
                            : "scale(1)",
                          transition:
                            "transform 0.15s ease-in-out" /* Smooth hover effect transition */,
                        }}
                        onMouseEnter={() => setHoveredClub(club)}
                        onMouseLeave={() => setHoveredClub(null)}
                      >
                        <img
                          src={
                            isCurrentHovered
                              ? hoveredPitchIcon
                              : unHoveredPitchIcon
                          }
                          alt={club}
                          className="pitch-marker-icon"
                          style={{
                            height: "28px",
                            width: "28px",
                            display: "block",
                            objectFit: "contain",
                          }}
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
            </div>

            <div className="status-panel">
              {clickedCounty ? (
                <p>
                  Viewing{" "}
                  <span className="text-highlight">{clickedCounty}</span> —{" "}
                  {filteredPitches.length} Pitches Loaded. Click again to zoom
                  out.
                </p>
              ) : (
                <p>
                  Inspecting:{" "}
                  <span className="text-highlight">
                    {hoveredCounty || "None"}
                  </span>{" "}
                  | Click a county to enlarge matches
                </p>
              )}
            </div>
          </section>

          <aside className="side-col">
            <div
              className="sub-box county-banner"
              style={{
                borderLeft: activeConfig
                  ? `8px solid ${activeConfig.primaryColor}`
                  : "8px solid #374151",
              }}
            >
              <h2>County Overview: {clickedCounty || "None Selected"}</h2>
              {activeConfig ? (
                <div className="county-meta">
                  <p>
                    <strong>Home Grounds:</strong> {activeConfig.stadium}
                  </p>
                </div>
              ) : (
                <p className="placeholder-text">
                  Click a county on the map of Ireland to inspect GAA stadium
                  information and kit setups.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </MantineProvider>
  );
}

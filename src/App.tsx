import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  Fragment,
  type RefObject,
} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Line,
} from "react-simple-maps";
import { gaaCounties } from "./assets/county_assets";
import { countyPitchAssets } from "./assets/county_pitch_assets";
import type { PitchWithCoords } from "./assets/county_pitch_assets";
import { CountyColourPattern } from "./assets/CountyColourPattern";
import { clusterPitches } from "./assets/pitch_clustering";
import type { PitchCluster } from "./assets/pitch_clustering";
import "./App.css";

const geoUrl = "/ireland-counties.json";

interface MapViewState {
  center: [number, number];
  zoom: number;
}

const defaultMapState: MapViewState = { center: [-8, 53.5], zoom: 1.3 };

const BLOCKED_ZOOM_GESTURES = ["wheel", "mousedown", "touchstart", "dblclick"];

const MAP_BOUNDS = {
  lngMin: -11,
  lngMax: -5,
  latMin: 51,
  latMax: 55.5,
};

function clampCenter([lng, lat]: [number, number]): [number, number] {
  return [
    Math.min(Math.max(lng, MAP_BOUNDS.lngMin), MAP_BOUNDS.lngMax),
    Math.min(Math.max(lat, MAP_BOUNDS.latMin), MAP_BOUNDS.latMax),
  ];
}

// Minimal shape of what we read off geography.properties — adjust the
// key names to match whatever ireland-counties.json actually uses.
interface CountyGeoProperties {
  NAME_1?: string;
  name?: string;
  COUNTY?: string;
}

// --- Fix #1: tooltip position tracking lives entirely inside this leaf
// component now. It attaches its own mousemove listener to the map frame
// and owns its own `pos` state, so mouse movement no longer re-renders
// <App> (and therefore never re-renders the county paths / markers).
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

  const activeCountyName = clickedCounty || hoveredCounty;
  const activeConfig = activeCountyName ? gaaCounties[activeCountyName] : null;
  const activeColours = activeConfig
    ? [
        activeConfig.primaryColor,
        activeConfig.secondaryColor,
        activeConfig.tertiaryColor,
      ].filter((c): c is string => Boolean(c))
    : [];

  const [filteredPitches, setFilteredPitches] = useState<PitchWithCoords[]>([]);
  const [mapViewport, setMapViewState] = useState<MapViewState>(defaultMapState);
  const [hoveredClub, setHoveredClub] = useState<string | null>(null);
  const [expandedCluster, setCluster] = useState<string | null>(null);

  const clusters: PitchCluster[] = useMemo(
    () => clusterPitches(filteredPitches, 5),
    [filteredPitches],
  );

  const filterZoomEvent = useCallback(
    (event: { type: string }) => !BLOCKED_ZOOM_GESTURES.includes(event.type),
    [],
  );

  const handleCountyClick = useCallback(
    (geo: { properties?: CountyGeoProperties | null }) => {
      if (!geo || !geo.properties) return;
      const countyName =
        geo.properties.NAME_1 || geo.properties.name || geo.properties.COUNTY;
      if (!countyName) return;

      if (clickedCounty === countyName) {
        setClickedCounty(null);
        setFilteredPitches([]);
        setCluster(null);
        setMapViewState(defaultMapState);
      } else {
        setClickedCounty(countyName);
        setCluster(null);

        const countyConfig = gaaCounties[countyName];
        if (countyConfig && countyConfig.center) {
          setMapViewState({
            center: clampCenter(countyConfig.center),
            zoom: countyConfig.zoom,
          });
        } else {
          setMapViewState(defaultMapState);
        }

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
      }
    },
    [clickedCounty],
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCluster(null);
        if (clickedCounty && gaaCounties[clickedCounty]) {
          setMapViewState({
            center: clampCenter(gaaCounties[clickedCounty].center),
            zoom: gaaCounties[clickedCounty].zoom,
          });
        }
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [clickedCounty]);

  return (
    <div className="page">
      <header className="page-header">
        <h1>GAA Stór</h1>
      </header>

      <div className="layout">
        <section className="map-col">
          {/* Fix #1: no onMouseMove here anymore — HoverTooltip components
              below attach their own listeners to this ref independently. */}
          <div className="map-frame" ref={mapFrameRef}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 4500 }}
              width={600}
              height={700}
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: "auto",
                height: "100%",
                maxHeight: "100%",
                display: "block",
              }}
            >
              <defs>
                <CountyColourPattern id="county-colours" colours={activeColours} />
              </defs>

              <ZoomableGroup
                center={mapViewport.center}
                zoom={mapViewport.zoom}
                minZoom={1}
                maxZoom={20}
                filterZoomEvent={filterZoomEvent}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies && geographies.length > 0 ? (
                      geographies.map((geo) => {
                        const properties = (geo.properties ||
                          {}) as CountyGeoProperties;
                        const name =
                          properties.NAME_1 || properties.name || "Unknown";
                        const isTarget =
                          name === hoveredCounty || name === clickedCounty;
                        const gaaFillValue = isTarget
                          ? `url(#county-colours)`
                          : "#cbd5e1";

                        return (
                          <Geography
                            // Fix #2: key no longer includes clickedCounty —
                            // paths update via isTarget/style, they don't remount.
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => handleCountyClick(geo)}
                            onMouseEnter={() =>
                              !clickedCounty && setHoveredCounty(name)
                            }
                            onMouseLeave={() => setHoveredCounty(null)}
                            style={{ "--county-colour": gaaFillValue } as any}
                            className={`county-path ${isTarget ? "is-active" : ""}`}
                          />
                        );
                      })
                    ) : (
                      <text
                        x="300"
                        y="350"
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="14"
                      >
                        Loading map vector boundaries…
                      </text>
                    )
                  }
                </Geographies>

                {clickedCounty
                  ? clusters
                      .filter(
                        (cluster) =>
                          expandedCluster === null ||
                          expandedCluster === cluster.id,
                      )
                      .map((cluster) => {
                        const isExpanded = expandedCluster === cluster.id;

                        if (cluster.pitches.length === 1) {
                          const pitch = cluster.pitches[0];
                          return (
                            <Marker
                              key={`${pitch.Club}-${pitch.Pitch}`}
                              coordinates={[pitch.lng, pitch.lat]}
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("Clicked pitch:", pitch.Club);
                              }}
                            >
                              <g className="pitch-marker">
                                <circle
                                  r={2.5}
                                  className="pitch-marker-pin"
                                  onMouseEnter={() => setHoveredClub(pitch.Club)}
                                  onMouseLeave={() => setHoveredClub(null)}
                                />
                              </g>
                            </Marker>
                          );
                        }

                        if (isExpanded) {
                          const spiderRadiusDeg =
                            0.1 + cluster.pitches.length * 0.01;

                          return (
                            <g key={cluster.id}>
                              {cluster.pitches.map((pitch, idx) => {
                                const angle =
                                  (2 * Math.PI * idx) / cluster.pitches.length;
                                const spiderCoords: [number, number] = [
                                  cluster.centroid.lng +
                                    spiderRadiusDeg * Math.cos(angle),
                                  cluster.centroid.lat +
                                    spiderRadiusDeg * Math.sin(angle),
                                ];
                                const realCoords: [number, number] = [
                                  pitch.lng,
                                  pitch.lat,
                                ];

                                return (
                                  <Fragment key={`${pitch.Club}-${pitch.Pitch}-${idx}`}>
                                    <Line
                                      from={realCoords}
                                      to={spiderCoords}
                                      stroke="#9ca3af"
                                      strokeWidth={0.5}
                                      strokeDasharray="2,2"
                                      className="spider-leader-line"
                                    />
                                    <Marker
                                      coordinates={spiderCoords}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        console.log("Clicked pitch:", pitch.Club);
                                      }}
                                    >
                                      <g className="pitch-marker">
                                        <circle
                                          r={2.5}
                                          className="pitch-marker-pin"
                                          onMouseEnter={() =>
                                            setHoveredClub(pitch.Club)
                                          }
                                          onMouseLeave={() => setHoveredClub(null)}
                                        />
                                      </g>
                                    </Marker>
                                  </Fragment>
                                );
                              })}

                              <Marker
                                coordinates={[cluster.centroid.lng, cluster.centroid.lat]}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCluster(null);
                                  if (clickedCounty && gaaCounties[clickedCounty]) {
                                    setMapViewState({
                                      center: clampCenter(
                                        gaaCounties[clickedCounty].center,
                                      ),
                                      zoom: gaaCounties[clickedCounty].zoom,
                                    });
                                  }
                                }}
                              >
                                <circle
                                  r={3}
                                  className="cluster-return-marker"
                                  style={{ cursor: "pointer" }}
                                />
                              </Marker>
                            </g>
                          );
                        }

                        return (
                          <Marker
                            key={cluster.id}
                            coordinates={[cluster.centroid.lng, cluster.centroid.lat]}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCluster(cluster.id);
                              setMapViewState({
                                center: clampCenter([
                                  cluster.centroid.lng,
                                  cluster.centroid.lat,
                                ]),
                                zoom: 5.5,
                              });
                            }}
                          >
                            <circle r={5} className="cluster-marker" />
                            <text
                              textAnchor="middle"
                              dy={3.5}
                              className="cluster-marker-label"
                            >
                              {cluster.pitches.length}
                            </text>
                          </Marker>
                        );
                      })
                  : null}
              </ZoomableGroup>
            </ComposableMap>

            {expandedCluster && (
              <button className="collapse-cluster-button" onClick={() => setCluster(null)}>
                Back to County View
              </button>
            )}

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
                Viewing <span className="text-highlight">{clickedCounty}</span> —{" "}
                {filteredPitches.length} Pitches Loaded. Click again to zoom out.
              </p>
            ) : (
              <p>
                Inspecting:{" "}
                <span className="text-highlight">{hoveredCounty || "None"}</span> |
                Click a county to enlarge matches
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
                <div className="swatch-container">
                  <span
                    className="swatch"
                    style={{ backgroundColor: activeConfig.primaryColor }}
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: activeConfig.secondaryColor }}
                  ></span>
                  {activeConfig.tertiaryColor && (
                    <span
                      className="swatch"
                      style={{ backgroundColor: activeConfig.tertiaryColor }}
                    ></span>
                  )}
                </div>
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
  );
}
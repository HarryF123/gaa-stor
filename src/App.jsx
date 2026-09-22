import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
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
import { CountyColourPattern } from "./assets/CountyColourPattern";
import { clusterPitches } from "./assets/pitch_clustering";
import "./App.css";

const geoUrl = "/ireland-counties.json";
const defaultMapState = { center: [-8, 53.5], zoom: 1.3 };

// Stable, module-level constants — never recreated on render, so they
// never trigger ZoomableGroup's internal effects to re-fire.
const BLOCKED_ZOOM_GESTURES = ["wheel", "mousedown", "touchstart", "dblclick"];

// translateExtent isn't used any more (unsupported in this version /
// unnecessary now that all pan/zoom is fully programmatic). This is a
// manual replacement so `center` can never drift outside Ireland's
// rough bounding box, regardless of what a future gaaCounties entry
// might contain.
const MAP_BOUNDS = {
  lngMin: -11,
  lngMax: -5,
  latMin: 51,
  latMax: 55.5,
};

function clampCenter([lng, lat]) {
  return [
    Math.min(Math.max(lng, MAP_BOUNDS.lngMin), MAP_BOUNDS.lngMax),
    Math.min(Math.max(lat, MAP_BOUNDS.latMin), MAP_BOUNDS.latMax),
  ];
}

export default function App() {
  const mapFrameRef = useRef(null);

  useEffect(() => {
    const node = mapFrameRef.current;
    if (!node) return;
    const preventPinchZoom = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };
    node.addEventListener("wheel", preventPinchZoom, { passive: false });
    return () => {
      node.removeEventListener("wheel", preventPinchZoom);
    };
  }, []);

  const [clickedCounty, setClickedCounty] = useState(null);
  const [hoveredCounty, setHoveredCounty] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const activeCountyName = clickedCounty || hoveredCounty;
  const activeConfig = activeCountyName ? gaaCounties[activeCountyName] : null;
  const activeColours = activeConfig
    ? [
        activeConfig.primaryColor,
        activeConfig.secondaryColor,
        activeConfig.tertiaryColor,
      ].filter(Boolean)
    : [];

  const [filteredPitches, setFilteredPitches] = useState([]);
  const [mapViewport, setMapViewState] = useState(defaultMapState);
  const [hoveredClub, setHoveredClub] = useState(null);
  const [expandedCluster, setCluster] = useState(null);

  const clusters = useMemo(
    () => clusterPitches(filteredPitches, 5),
    [filteredPitches],
  );

  // Stable reference — no external deps, so this is created once and
  // never causes ZoomableGroup's sync effect to re-fire on re-render.
  const filterZoomEvent = useCallback(
    (event) => !BLOCKED_ZOOM_GESTURES.includes(event.type),
    [],
  );

  // Single, shared mouse-position tracker for both hover tooltips.
  // Replaces the old per-element onMouseMove handlers that were
  // duplicated across every county path and every pitch marker,
  // which forced a full re-render on every pixel of cursor movement.
  const handleMapMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleCountyClick = (geo) => {
    // 💡 Guard fallback: Ensure geo object properties exist safely
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
      setCluster(null); // Reset cluster expansion when a new county is clicked

      const countyConfig = gaaCounties[countyName];

      if (countyConfig && countyConfig.center) {
        setMapViewState({
          center: clampCenter(countyConfig.center),
          zoom: countyConfig.zoom,
        });
      } else {
        setMapViewState(defaultMapState);
      }

      const pitches = countyPitchAssets
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
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setCluster(null);
        // 💡 Smoothly restore camera zoom back to the main county view boundaries
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
  }, [clickedCounty]); // 💡 Added clickedCounty dependency here

  return (
    <div className="page">
      <header className="page-header">
        <h1>GAA Stór</h1>
      </header>

      <div className="layout">
        {/* Left Column: Interactive Map Canvas */}
        <section className="map-col">
          <div
            className="map-frame"
            ref={mapFrameRef}
            onMouseMove={handleMapMouseMove}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 4500,
              }}
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
                <CountyColourPattern
                  id="county-colours"
                  colours={activeColours}
                />
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
                    // 💡 CRITICAL FIX: Add a fallback check to make sure vector arrays are loaded before mapping
                    geographies && geographies.length > 0 ? (
                      geographies.map((geo) => {
                        const properties = geo.properties || {};
                        const name =
                          properties.NAME_1 || properties.name || "Unknown";
                        const isTarget =
                          name === hoveredCounty || name === clickedCounty;
                        const gaaFillValue = isTarget
                          ? `url(#county-colours)`
                          : "#cbd5e1";

                        return (
                          <Geography
                            key={`${geo.rsmKey}-${clickedCounty}`}
                            geography={geo}
                            onClick={() => handleCountyClick(geo)}
                            onMouseEnter={() =>
                              !clickedCounty && setHoveredCounty(name)
                            }
                            onMouseLeave={() => setHoveredCounty(null)}
                            style={{
                              "--county-colour": gaaFillValue,
                            }}
                            className={`county-path ${isTarget ? "is-active" : ""}`}
                          />
                        );
                      })
                    ) : (
                      // Fallback text elements while JSON vectors resolve asynchronously
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

                        // ungrouped single pitch — render normally
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
                                  onMouseEnter={() =>
                                    setHoveredClub(pitch.Club)
                                  }
                                  onMouseLeave={() => setHoveredClub(null)}
                                />
                              </g>
                            </Marker>
                          );
                        }

                        // this cluster is exploded open
                        if (isExpanded) {
                          const spiderRadiusDeg =
                            0.1 + cluster.pitches.length * 0.01; // wider "blow out" — bump up/down to taste

                          return (
                            <g key={cluster.id}>
                              {cluster.pitches.map((pitch, idx) => {
                                const angle =
                                  (2 * Math.PI * idx) / cluster.pitches.length;
                                const spiderCoords = [
                                  cluster.centroid.lng +
                                    spiderRadiusDeg * Math.cos(angle),
                                  cluster.centroid.lat +
                                    spiderRadiusDeg * Math.sin(angle),
                                ];
                                const realCoords = [pitch.lng, pitch.lat];

                                return (
                                  <React.Fragment
                                    key={`${pitch.Club}-${pitch.Pitch}-${idx}`}
                                  >
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
                                        console.log(
                                          "Clicked pitch:",
                                          pitch.Club,
                                        );
                                      }}
                                    >
                                      <g className="pitch-marker">
                                        <circle
                                          r={2.5}
                                          className="pitch-marker-pin"
                                          onMouseEnter={() =>
                                            setHoveredClub(pitch.Club)
                                          }
                                          onMouseLeave={() =>
                                            setHoveredClub(null)
                                          }
                                        />
                                      </g>
                                    </Marker>
                                  </React.Fragment>
                                );
                              })}

                              {/* centre return node — click it to collapse back */}
                              <Marker
                                coordinates={[
                                  cluster.centroid.lng,
                                  cluster.centroid.lat,
                                ]}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCluster(null);
                                  if (
                                    clickedCounty &&
                                    gaaCounties[clickedCounty]
                                  ) {
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

                        // collapsed cluster badge
                        return (
                          <Marker
                            key={cluster.id}
                            coordinates={[
                              cluster.centroid.lng,
                              cluster.centroid.lat,
                            ]}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCluster(cluster.id);

                              // 💡 PUSH CAMERA ZOOM DEEPER UPON CLICK
                              setMapViewState({
                                center: clampCenter([
                                  cluster.centroid.lng,
                                  cluster.centroid.lat,
                                ]),
                                zoom: 5.5, // ⬅️ Increases focus mapping detail level to separate spider lines nicely
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
              <button
                className="collapse-cluster-button"
                onClick={() => setCluster(null)}
              >
                Back to County View
              </button>
            )}

            {/* Popup for hovered county */}
            {hoveredCounty && !clickedCounty && (
              <div
                className="county-hover-popup"
                style={{
                  position: "fixed",
                  bottom: "auto",
                  right: "auto",
                  left: `${pos.x + 20}px`,
                  top: `${pos.y - 45}px`,
                  backgroundColor: "#1f2937",
                  color: "#ffffff",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  border: "1px solid #4b5563",
                  pointerEvents: "none", // 🌟 CRITICAL: Prevents the popup from blocking mouse events on the map below
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                }}
              >
                <p>{hoveredCounty}</p>
              </div>
            )}
            {hoveredClub && clickedCounty && (
              <div
                className="club-hover-popup"
                style={{
                  position: "fixed",
                  bottom: "auto",
                  right: "auto",
                  left: `${pos.x + 20}px`,
                  top: `${pos.y - 45}px`,
                  backgroundColor: "#1f2937",
                  color: "#ffffff",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  border: "1px solid #4b5563",
                  pointerEvents: "none", // 🌟 CRITICAL: Prevents the popup from blocking mouse events on the map below
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                }}
              >
                <p>{hoveredClub}</p>
              </div>
            )}
          </div>

          <div className="status-panel">
            {clickedCounty ? (
              <p>
                Viewing <span className="text-highlight">{clickedCounty}</span>{" "}
                — {filteredPitches.length} Pitches Loaded. Click again to zoom
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

        {/* Right Column: Dynamic Side Information Dashboard */}
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
                    style={{
                      backgroundColor: activeConfig.secondaryColor,
                    }}
                  ></span>
                  {activeConfig.tertiaryColor && (
                    <span
                      className="swatch"
                      style={{
                        backgroundColor: activeConfig.tertiaryColor,
                      }}
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

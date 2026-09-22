function distanceKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export const clusterPitches = (pitches, thresholdKm = 5) => {
  const clusters = [];
  const used = new Array(pitches.length).fill(false);

  pitches.forEach((pitch, i) => {
    if (used[i]) return;
    const group = [pitch];
    used[i] = true;

    pitches.forEach((other, j) => {
      if (i === j || used[j]) return;
      if (distanceKm(pitch, other) <= thresholdKm) {
        group.push(other);
        used[j] = true;
      }
    });

    const centroid = {
      lat: group.reduce((s, p) => s + p.lat, 0) / group.length,
      lng: group.reduce((s, p) => s + p.lng, 0) / group.length,
    };

    clusters.push({ id: `cluster-${i}`, centroid, pitches: group });
  });

  return clusters;
}
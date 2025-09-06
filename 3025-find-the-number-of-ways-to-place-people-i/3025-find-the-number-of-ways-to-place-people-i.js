function numberOfPairs(points) {
  const n = points.length;
  let ans = 0;

  const isUpperLeft = (a, b) => a[0] <= b[0] && a[1] >= b[1];

  const inRect = (a, b, c) =>
    c[0] >= Math.min(a[0], b[0]) && c[0] <= Math.max(a[0], b[0]) &&
    c[1] >= Math.min(a[1], b[1]) && c[1] <= Math.max(a[1], b[1]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (!isUpperLeft(points[i], points[j])) continue;

      let ok = true;
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        if (inRect(points[i], points[j], points[k])) { ok = false; break; }
      }
      if (ok) ans++;
    }
  }
  return ans;
}
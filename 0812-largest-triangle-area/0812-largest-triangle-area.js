function largestTriangleArea(points) {
  let max = 0;
  const n = points.length;
  for (let i = 0; i < n - 2; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n - 1; j++) {
      const [x2, y2] = points[j];
      for (let k = j + 1; k < n; k++) {
        const [x3, y3] = points[k];
        const area = Math.abs(
          x1 * (y2 - y3) +
          x2 * (y3 - y1) +
          x3 * (y1 - y2)
        ) / 2;
        if (area > max) max = area;
      }
    }
  }
  return max;
}

function numberOfPairs(points) {
  const n = points.length;
  const xs = Array.from(new Set(points.map(p => p[0]))).sort((a, b) => a - b);
  const ys = Array.from(new Set(points.map(p => p[1]))).sort((a, b) => a - b);
  const mx = new Map(), my = new Map();
  xs.forEach((v, i) => mx.set(v, i + 1));
  ys.forEach((v, i) => my.set(v, i + 1));
  const m = xs.length, k = ys.length;
  const ps = Array.from({ length: m + 1 }, () => Array(k + 1).fill(0));
  const ix = new Array(n), iy = new Array(n), X = new Array(n), Y = new Array(n);
  for (let i = 0; i < n; i++) {
    X[i] = points[i][0];
    Y[i] = points[i][1];
    ix[i] = mx.get(X[i]);
    iy[i] = my.get(Y[i]);
    ps[ix[i]][iy[i]] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= k; j++) {
      ps[i][j] += ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1];
    }
  }
  let ans = 0;
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      if (a === b) continue;
      if (X[a] <= X[b] && Y[a] >= Y[b]) {
        const il = ix[a], ir = ix[b], jl = iy[b], jr = iy[a];
        const c = ps[ir][jr] - ps[il - 1][jr] - ps[ir][jl - 1] + ps[il - 1][jl - 1];
        if (c === 2) ans++;
      }
    }
  }
  return ans;
}

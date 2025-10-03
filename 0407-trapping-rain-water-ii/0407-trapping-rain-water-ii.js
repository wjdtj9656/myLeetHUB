function trapRainWater(heightMap) {
  const m = heightMap.length;
  const n = heightMap[0].length;
  if (m < 3 || n < 3) return 0;

  class MinHeap {
    constructor() { this.a = []; }
    size() { return this.a.length; }
    push(v) {
      this.a.push(v);
      let i = this.a.length - 1;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (this.a[p][0] <= this.a[i][0]) break;
        [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
        i = p;
      }
    }
    pop() {
      const res = this.a[0];
      const x = this.a.pop();
      if (this.a.length) {
        this.a[0] = x;
        let i = 0;
        while (true) {
          let l = i * 2 + 1, r = l + 1, s = i;
          if (l < this.a.length && this.a[l][0] < this.a[s][0]) s = l;
          if (r < this.a.length && this.a[r][0] < this.a[s][0]) s = r;
          if (s === i) break;
          [this.a[s], this.a[i]] = [this.a[i], this.a[s]];
          i = s;
        }
      }
      return res;
    }
  }

  const heap = new MinHeap();
  const vis = Array.from({ length: m }, () => Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    heap.push([heightMap[i][0], i, 0]);
    heap.push([heightMap[i][n - 1], i, n - 1]);
    vis[i][0] = true;
    vis[i][n - 1] = true;
  }
  for (let j = 1; j < n - 1; j++) {
    heap.push([heightMap[0][j], 0, j]);
    heap.push([heightMap[m - 1][j], m - 1, j]);
    vis[0][j] = true;
    vis[m - 1][j] = true;
  }

  let ans = 0, maxh = 0;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  while (heap.size()) {
    const [h, r, c] = heap.pop();
    if (h > maxh) maxh = h;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= m || nc < 0 || nc >= n || vis[nr][nc]) continue;
      vis[nr][nc] = true;
      const nh = heightMap[nr][nc];
      if (nh < maxh) ans += maxh - nh;
      heap.push([Math.max(nh, maxh), nr, nc]);
    }
  }
  return ans;
}

var pacificAtlantic = function(heights) {
  const m = heights.length, n = heights[0].length;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  function bfs(starts) {
    const vis = Array.from({ length: m }, () => Array(n).fill(false));
    const q = [];
    for (const [r, c] of starts) {
      if (!vis[r][c]) { vis[r][c] = true; q.push([r, c]); }
    }
    let i = 0;
    while (i < q.length) {
      const [r, c] = q[i++];
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
        if (vis[nr][nc]) continue;
        if (heights[nr][nc] >= heights[r][c]) {
          vis[nr][nc] = true;
          q.push([nr, nc]);
        }
      }
    }
    return vis;
  }

  const pacStarts = [], atlStarts = [];
  for (let c = 0; c < n; c++) {
    pacStarts.push([0, c]);
    atlStarts.push([m - 1, c]);
  }
  for (let r = 0; r < m; r++) {
    pacStarts.push([r, 0]);
    atlStarts.push([r, n - 1]);
  }

  const pac = bfs(pacStarts);
  const atl = bfs(atlStarts);

  const res = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (pac[r][c] && atl[r][c]) res.push([r, c]);
    }
  }
  return res;
};

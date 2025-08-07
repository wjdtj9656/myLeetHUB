function maxCollectedFruits(fruits) {
  const n = fruits.length;
  let p1 = 0;
  for (let i = 0; i < n; i++) p1 += fruits[i][i];

  const NEG = -Infinity;
  const dp2 = Array.from({ length: n }, () => Array(n).fill(NEG));
  dp2[0][n - 1] = fruits[0][n - 1];
  const dir2 = [[1, -1], [1, 0], [1, 1]];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (dp2[i][j] < 0) continue;
      for (const [dr, dc] of dir2) {
        const x = i + dr, y = j + dc;
        if (x < 0 || x >= n || y < 0 || y >= n) continue;
        if (y <= x) continue;
        dp2[x][y] = Math.max(dp2[x][y], dp2[i][j] + fruits[x][y]);
      }
    }
  }
  dp2[n - 1][n - 1] = Math.max(dp2[n - 2][n - 1], dp2[n - 2][n - 2]);

  const dp3 = Array.from({ length: n }, () => Array(n).fill(NEG));
  dp3[n - 1][0] = fruits[n - 1][0];
  const dir3 = [[-1, 1], [0, 1], [1, 1]];
  for (let j = 0; j < n; j++) {
    for (let i = j + 1; i < n; i++) {
      if (dp3[i][j] < 0) continue;
      for (const [dr, dc] of dir3) {
        const x = i + dr, y = j + dc;
        if (x < 0 || x >= n || y < 0 || y >= n) continue;
        if (x <= y) continue;
        dp3[x][y] = Math.max(dp3[x][y], dp3[i][j] + fruits[x][y]);
      }
    }
  }
  dp3[n - 1][n - 1] = Math.max(dp3[n - 1][n - 2], dp3[n - 2][n - 2]);

  return p1 + dp2[n - 1][n - 1] + dp3[n - 1][n - 1];
}

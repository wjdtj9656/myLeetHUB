/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
  const n = grid.length;
  const diag = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const k = i - j;
      if (!diag.has(k)) diag.set(k, []);
      diag.get(k).push(grid[i][j]);
    }
  }
  for (const [k, arr] of diag) {
    arr.sort((a, b) => (k >= 0 ? b - a : a - b));
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const k = i - j;
      grid[i][j] = diag.get(k).shift();
    }
  }
  return grid;
};

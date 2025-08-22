/**
 * @param {number[][]} grid
 * @return {number}
 */
function minimumArea(grid) {
  const m = grid.length, n = grid[0].length;
  let minR = Infinity, maxR = -1, minC = Infinity, maxC = -1;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        if (r < minR) minR = r;
        if (r > maxR) maxR = r;
        if (c < minC) minC = c;
        if (c > maxC) maxC = c;
      }
    }
  }
  const height = maxR - minR + 1;
  const width  = maxC - minC + 1;
  return height * width;
}

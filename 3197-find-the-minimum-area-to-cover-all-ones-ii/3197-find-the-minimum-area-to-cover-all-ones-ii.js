function minimumSum(grid) {
  const H = grid.length, W = grid[0].length;
  const ones = [];
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) if (grid[r][c] === 1) ones.push([r, c]);
  }

  function area(r1, r2, c1, c2) {
    if (r1 > r2 || c1 > c2) return 0;
    let rmin = Infinity, rmax = -Infinity, cmin = Infinity, cmax = -Infinity;
    for (const [r, c] of ones) {
      if (r1 <= r && r <= r2 && c1 <= c && c <= c2) {
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
        if (c < cmin) cmin = c;
        if (c > cmax) cmax = c;
      }
    }
    if (rmin === Infinity) return 0;
    return (rmax - rmin + 1) * (cmax - cmin + 1);
  }

  let ans = Infinity;

  for (let c1 = -1; c1 < W - 1; c1++) {
    for (let c2 = c1 + 1; c2 < W; c2++) {
      const a = area(0, H - 1, 0, c1);
      const b = area(0, H - 1, c1 + 1, c2);
      const c = area(0, H - 1, c2 + 1, W - 1);
      ans = Math.min(ans, a + b + c);
    }
  }

  for (let r1 = -1; r1 < H - 1; r1++) {
    for (let r2 = r1 + 1; r2 < H; r2++) {
      const a = area(0, r1, 0, W - 1);
      const b = area(r1 + 1, r2, 0, W - 1);
      const c = area(r2 + 1, H - 1, 0, W - 1);
      ans = Math.min(ans, a + b + c);
    }
  }

  for (let cutC = -1; cutC < W - 1; cutC++) {
    for (let r = -1; r < H - 1; r++) {
      const leftTop = area(0, r, 0, cutC);
      const leftBottom = area(r + 1, H - 1, 0, cutC);
      const rightAll = area(0, H - 1, cutC + 1, W - 1);
      ans = Math.min(ans, leftTop + leftBottom + rightAll);
    }
    for (let r = -1; r < H - 1; r++) {
      const leftAll = area(0, H - 1, 0, cutC);
      const rightTop = area(0, r, cutC + 1, W - 1);
      const rightBottom = area(r + 1, H - 1, cutC + 1, W - 1);
      ans = Math.min(ans, leftAll + rightTop + rightBottom);
    }
  }

  for (let cutR = -1; cutR < H - 1; cutR++) {
    for (let c = -1; c < W - 1; c++) {
      const topLeft = area(0, cutR, 0, c);
      const topRight = area(0, cutR, c + 1, W - 1);
      const bottomAll = area(cutR + 1, H - 1, 0, W - 1);
      ans = Math.min(ans, topLeft + topRight + bottomAll);
    }
    for (let c = -1; c < W - 1; c++) {
      const topAll = area(0, cutR, 0, W - 1);
      const bottomLeft = area(cutR + 1, H - 1, 0, c);
      const bottomRight = area(cutR + 1, H - 1, c + 1, W - 1);
      ans = Math.min(ans, topAll + bottomLeft + bottomRight);
    }
  }

  return ans;
}

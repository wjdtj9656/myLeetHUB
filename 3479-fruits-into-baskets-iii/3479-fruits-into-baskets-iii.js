function numOfUnplacedFruits(fruits, baskets) {
  const n = baskets.length;
  let size = 1;
  while (size < n) size <<= 1;
  const seg = Array(2 * size).fill(-Infinity);
  for (let i = 0; i < n; i++) seg[size + i] = baskets[i];
  for (let i = size - 1; i > 0; i--) seg[i] = Math.max(seg[2 * i], seg[2 * i + 1]);
  let unplaced = 0;
  const update = i => {
    let idx = size + i;
    seg[idx] = -Infinity;
    idx >>= 1;
    while (idx) {
      seg[idx] = Math.max(seg[2 * idx], seg[2 * idx + 1]);
      idx >>= 1;
    }
  };
  const findPos = x => {
    if (seg[1] < x) return -1;
    let idx = 1;
    while (idx < size) {
      idx = seg[2 * idx] >= x ? 2 * idx : 2 * idx + 1;
    }
    return idx - size;
  };
  for (const f of fruits) {
    const pos = findPos(f);
    if (pos < 0) unplaced++;
    else update(pos);
  }
  return unplaced;
}

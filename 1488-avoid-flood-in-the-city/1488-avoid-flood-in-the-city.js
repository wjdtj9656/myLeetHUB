function avoidFlood(rains) {
  const n = rains.length;
  const ans = new Array(n).fill(1);
  const last = new Map();     
  const dry = [];             

  for (let i = 0; i < n; i++) {
    const x = rains[i];
    if (x > 0) {
      ans[i] = -1;
      if (last.has(x)) {
        const j = upperBound(dry, last.get(x));
        if (j === dry.length) return [];
        const d = dry[j];
        ans[d] = x;
        dry.splice(j, 1);
      }
      last.set(x, i);
    } else {
      dry.push(i);
    }
  }
  return ans;

  function upperBound(arr, target) {
    let l = 0, r = arr.length;
    while (l < r) {
      const m = (l + r) >> 1;
      if (arr[m] <= target) l = m + 1;
      else r = m;
    }
    return l;
  }
}

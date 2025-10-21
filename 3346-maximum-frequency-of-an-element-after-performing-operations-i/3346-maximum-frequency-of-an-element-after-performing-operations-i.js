function maxFrequency(nums, k, numOperations) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const cnt = new Map();
  let l = 0, ans = 1, maxDup = 0;

  const inc = v => {
    const c = (cnt.get(v) || 0) + 1;
    cnt.set(v, c);
    if (c > maxDup) maxDup = c;
  };
  const dec = v => {
    const c = (cnt.get(v) || 0) - 1;
    if (c <= 0) cnt.delete(v); else cnt.set(v, c);
  };
  const recomputeMaxDup = () => {
    let m = 0;
    for (const c of cnt.values()) if (c > m) m = c;
    maxDup = m;
  };

  for (let r = 0; r < n; r++) {
    inc(nums[r]);
    while (nums[r] - nums[l] > 2 * k) {
      const wasMax = (cnt.get(nums[l]) || 0) === maxDup;
      dec(nums[l++]);
      if (wasMax) recomputeMaxDup();
    }
    const window = r - l + 1;
    ans = Math.max(ans, Math.min(window, maxDup + numOperations));
  }
  return Math.min(ans, n);
}

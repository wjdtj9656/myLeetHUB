function maxIncreasingSubarrays(nums) {
  const n = nums.length;
  const L = new Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) L[i] = L[i + 1] + 1;
  }
  const ok = k => {
    for (let i = 0; i + 2 * k <= n; i++) {
      if (L[i] >= k && L[i + k] >= k) return true;
    }
    return false;
  };
  let lo = 1, hi = Math.floor(n / 2);
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (ok(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}

function maxDistinctElements(nums, k) {
  const intervals = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) intervals[i] = [nums[i] - k, nums[i] + k];
  intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let next = -1e18, count = 0;
  for (let i = 0; i < intervals.length; i++) {
    const l = intervals[i][0], r = intervals[i][1];
    const t = Math.max(next, l);
    if (t <= r) { count++; next = t + 1; }
  }
  return count;
}

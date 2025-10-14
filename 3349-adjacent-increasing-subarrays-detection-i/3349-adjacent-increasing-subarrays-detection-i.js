
function hasIncreasingSubarrays(nums, k) {
  const n = nums.length;
  const inc = Array(n).fill(1);
  for (let i = 1; i < n; i++) inc[i] = nums[i - 1] < nums[i] ? inc[i - 1] + 1 : 1;
  for (let s = 0; s + 2 * k <= n; s++) {
    if (inc[s + k - 1] >= k && inc[s + 2 * k - 1] >= k) return true;
  }
  return false;
}

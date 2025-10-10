function maximumEnergy(energy, k) {
  const n = energy.length;
  const dp = new Array(n).fill(0);
  let ans = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    dp[i] = energy[i] + (i + k < n ? dp[i + k] : 0);
    if (dp[i] > ans) ans = dp[i];
  }
  return ans;
}
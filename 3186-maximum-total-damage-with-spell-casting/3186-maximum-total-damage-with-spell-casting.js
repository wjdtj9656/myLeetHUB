/**
 * @param {number[]} power
 * @return {number}
 */
function maximumTotalDamage(power) {
  const freq = new Map();
  for (const x of power) freq.set(x, (freq.get(x) || 0) + 1);

  const val = [...freq.keys()].sort((a, b) => a - b);
  const n = val.length;
  const gain = val.map(v => v * freq.get(v));

  const prev = Array(n).fill(-1);
  let p = 0; 
  for (let i = 0; i < n; i++) {
    while (p < n && val[p] <= val[i] - 3) p++;
    prev[i] = p - 1; 
  }

  const dp = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const notTake = i > 0 ? dp[i - 1] : 0;
    const take = gain[i] + (prev[i] >= 0 ? dp[prev[i]] : 0);
    dp[i] = Math.max(notTake, take);
  }
  return dp[n - 1];
}
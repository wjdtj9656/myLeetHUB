/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
  const MOD = 1_000_000_007;
  const powers = [];
  for (let i = 1; ; i++) {
    const p = Math.pow(i, x);
    if (p > n) break;
    powers.push(p);
  }
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  for (const v of powers) {
    for (let s = n; s >= v; s--) {
      dp[s] = (dp[s] + dp[s - v]) % MOD;
    }
  }
  return dp[n];
};

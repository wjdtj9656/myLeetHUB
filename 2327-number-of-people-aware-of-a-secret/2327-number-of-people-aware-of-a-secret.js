function peopleAwareOfSecret(n, delay, forget) {
  const MOD = 1_000_000_007;
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  let share = 0;

  for (let i = 2; i <= n; i++) {
    if (i - delay >= 1) {
      share = (share + dp[i - delay]) % MOD;
    }
    if (i - forget >= 1) {
      share = (share - dp[i - forget] + MOD) % MOD;
    }
    dp[i] = share;
  }

  let ans = 0;
  for (let i = Math.max(1, n - forget + 1); i <= n; i++) {
    ans = (ans + dp[i]) % MOD;
  }
  return ans;
}

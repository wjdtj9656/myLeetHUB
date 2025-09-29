function minScoreTriangulation(values) {
  const n = values.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      let best = Infinity;
      for (let k = i + 1; k < j; k++) {
        const cost = dp[i][k] + dp[k][j] + values[i] * values[k] * values[j];
        if (cost < best) best = cost;
      }
      dp[i][j] = best;
    }
  }
  return dp[0][n - 1];
}
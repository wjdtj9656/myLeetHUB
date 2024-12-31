/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const lastDay = days[days.length - 1];
  const dp = new Array(lastDay + 1).fill(0);
  const daySet = new Set(days);

  for (let d = 1; d <= lastDay; d++) {
    if (!daySet.has(d)) {
      dp[d] = dp[d - 1];
    } else {
      const cost1 = dp[d - 1] + costs[0];      // 하루 전까지 비용 + 1일권
      const cost7 = dp[Math.max(0, d - 7)] + costs[1];   // 7일 전 비용 + 7일권
      const cost30 = dp[Math.max(0, d - 30)] + costs[2]; // 30일 전 비용 + 30일권
      dp[d] = Math.min(cost1, cost7, cost30);
    }
  }
  return dp[lastDay];
};

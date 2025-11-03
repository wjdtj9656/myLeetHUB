function minCost(colors, neededTime) {
  let n = colors.length, ans = 0, maxKeep = neededTime[0];
  for (let i = 1; i < n; i++) {
    if (colors[i] === colors[i - 1]) {
      ans += Math.min(maxKeep, neededTime[i]);
      maxKeep = Math.max(maxKeep, neededTime[i]);
    } else {
      maxKeep = neededTime[i];
    }
  }
  return ans;
}

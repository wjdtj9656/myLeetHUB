function getDescentPeriods(prices) {
  let ans = 0;
  let len = 0;

  for (let i = 0; i < prices.length; i++) {
    if (i === 0 || prices[i - 1] - prices[i] !== 1) len = 1;
    else len += 1;
    ans += len;
  }

  return ans;
}

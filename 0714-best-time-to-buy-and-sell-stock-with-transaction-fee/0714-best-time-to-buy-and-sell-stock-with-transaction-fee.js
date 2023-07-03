/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
  let buying = -prices[0];
  let selling = 0;

  for (let i = 1; i < n; i++) {
    buying = Math.max(buying, selling - prices[i]);

    selling = Math.max(selling, buying + prices[i] - fee);
  }

  return selling;
};
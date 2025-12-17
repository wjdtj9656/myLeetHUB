var maximumProfit = function(prices, k) {
    if (!prices || prices.length === 0) return 0;

    let profit = new Array(k + 1).fill(0);
    let hold = new Array(k + 1).fill(-Infinity);
    let short = new Array(k + 1).fill(-Infinity);

    for (let price of prices) {
        let prevProfit = [...profit];
        let prevHold = [...hold];
        let prevShort = [...short];

        for (let i = 1; i <= k; i++) {
            hold[i] = Math.max(prevHold[i], prevProfit[i - 1] - price);
            short[i] = Math.max(prevShort[i], prevProfit[i - 1] + price);
            profit[i] = Math.max(prevProfit[i], prevHold[i] + price, prevShort[i] - price);
        }
    }

    return profit[k];
};
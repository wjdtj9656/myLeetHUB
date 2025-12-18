var maxProfit = function(prices, strategy, k) {
    const n = prices.length;
    let initialProfit = 0;

    for (let i = 0; i < n; i++) {
        initialProfit += strategy[i] * prices[i];
    }

    const getGainToZero = (i) => -strategy[i] * prices[i];
    const getGainToOne = (i) => (1 - strategy[i]) * prices[i];

    const halfK = k / 2;
    let currentDelta = 0;

    for (let i = 0; i < halfK; i++) {
        currentDelta += getGainToZero(i);
    }
    for (let i = halfK; i < k; i++) {
        currentDelta += getGainToOne(i);
    }

    let maxDelta = Math.max(0, currentDelta);
    let tempDelta = currentDelta;

    for (let j = 0; j < n - k; j++) {
        tempDelta -= getGainToZero(j);
        tempDelta -= getGainToOne(j + halfK);
        tempDelta += getGainToZero(j + halfK);
        tempDelta += getGainToOne(j + k);

        maxDelta = Math.max(maxDelta, tempDelta);
    }

    return initialProfit + maxDelta;
};
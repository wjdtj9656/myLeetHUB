var putMarbles = function(weights, k) {
    const n = weights.length;
    if (k === 1 || k === n) return 0;

    const pairSums = [];
    for (let i = 0; i < n - 1; i++) {
        pairSums.push(weights[i] + weights[i + 1]);
    }

    pairSums.sort((a, b) => a - b);

    let minScore = 0;
    let maxScore = 0;
    for (let i = 0; i < k - 1; i++) {
        minScore += pairSums[i]; 
        maxScore += pairSums[pairSums.length - 1 - i]; 
    }

    return maxScore - minScore;
};

var maxMatrixSum = function(matrix) {
    let totalSum = 0;
    let minAbs = Infinity;
    let negCount = 0;

    for (let row of matrix) {
        for (let val of row) {
            totalSum += Math.abs(val);
            if (val < 0) negCount++;
            minAbs = Math.min(minAbs, Math.abs(val));
        }
    }

    if (negCount % 2 === 0) {
        return totalSum;
    }
    return totalSum - 2 * minAbs;
};
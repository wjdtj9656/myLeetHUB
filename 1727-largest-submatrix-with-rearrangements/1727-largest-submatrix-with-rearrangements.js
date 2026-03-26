function largestSubmatrix(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxArea = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1 && i > 0) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }

        const currRow = [...matrix[i]].sort((a, b) => b - a);

        for (let k = 0; k < n; k++) {
            maxArea = Math.max(maxArea, currRow[k] * (k + 1));
        }
    }

    return maxArea;
}
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0;
    const m = matrix.length;
    const n = matrix[0].length;
    const heights = new Array(n).fill(0);
    let maxArea = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }

        const stack = [];
        for (let j = 0; j <= n; j++) {
            const h = (j === n) ? 0 : heights[j];
            while (stack.length && h < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()];
                const width = stack.length ? j - stack[stack.length - 1] - 1 : j;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(j);
        }
    }

    return maxArea;
};
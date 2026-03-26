
var minAbsDiff = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const ans = Array.from({ length: m - k + 1 }, () => Array(n - k + 1).fill(0));

    for (let i = 0; i <= m - k; i++) {
        for (let j = 0; j <= n - k; j++) {
            const vals = new Set();
            for (let r = 0; r < k; r++) {
                for (let c = 0; c < k; c++) {
                    vals.add(grid[i + r][j + c]);
                }
            }
            
            const sortedVals = Array.from(vals).sort((a, b) => a - b);
            
            if (sortedVals.length < 2) {
                ans[i][j] = 0;
            } else {
                let minDiff = Infinity;
                for (let p = 1; p < sortedVals.length; p++) {
                    minDiff = Math.min(minDiff, sortedVals[p] - sortedVals[p - 1]);
                }
                ans[i][j] = minDiff;
            }
        }
    }

    return ans;
};
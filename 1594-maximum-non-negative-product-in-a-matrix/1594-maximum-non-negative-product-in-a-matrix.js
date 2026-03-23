/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const MOD = 1000000007n;

    const maxDP = Array.from({ length: m }, () => Array(n).fill(0n));
    const minDP = Array.from({ length: m }, () => Array(n).fill(0n));

    maxDP[0][0] = minDP[0][0] = BigInt(grid[0][0]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;

            let candidates = [];
            if (i > 0) {
                candidates.push(maxDP[i - 1][j] * BigInt(grid[i][j]));
                candidates.push(minDP[i - 1][j] * BigInt(grid[i][j]));
            }
            if (j > 0) {
                candidates.push(maxDP[i][j - 1] * BigInt(grid[i][j]));
                candidates.push(minDP[i][j - 1] * BigInt(grid[i][j]));
            }

            let currentMax = candidates[0];
            let currentMin = candidates[0];

            for (let k = 1; k < candidates.length; k++) {
                if (candidates[k] > currentMax) currentMax = candidates[k];
                if (candidates[k] < currentMin) currentMin = candidates[k];
            }

            maxDP[i][j] = currentMax;
            minDP[i][j] = currentMin;
        }
    }

    const result = maxDP[m - 1][n - 1];
    return result < 0n ? -1 : Number(result % MOD);
};
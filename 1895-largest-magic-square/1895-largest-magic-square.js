/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rowSum = Array.from({ length: m }, () => new Array(n + 1).fill(0));
    const colSum = Array.from({ length: m + 1 }, () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowSum[i][j + 1] = rowSum[i][j] + grid[i][j];
            colSum[i + 1][j] = colSum[i][j] + grid[i][j];
        }
    }

    const isMagic = (r, c, k) => {
        let d1 = 0, d2 = 0;
        for (let i = 0; i < k; i++) {
            d1 += grid[r + i][c + i];
            d2 += grid[r + i][c + k - 1 - i];
        }
        if (d1 !== d2) return false;

        for (let i = 0; i < k; i++) {
            if (rowSum[r + i][c + k] - rowSum[r + i][c] !== d1) return false;
            if (colSum[r + k][c + i] - colSum[r][c + i] !== d1) return false;
        }
        return true;
    };

    for (let k = Math.min(m, n); k > 1; k--) {
        for (let i = 0; i <= m - k; i++) {
            for (let j = 0; j <= n - k; j++) {
                if (isMagic(i, j, k)) return k;
            }
        }
    }

    return 1;
};
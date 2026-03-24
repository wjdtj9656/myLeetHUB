/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const MOD = 12345;
    const res = Array.from({ length: n }, () => new Array(m));

    let p = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[i][j] = p;
            p = (p * (grid[i][j] % MOD)) % MOD;
        }
    }

    p = 1;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            res[i][j] = (res[i][j] * p) % MOD;
            p = (p * (grid[i][j] % MOD)) % MOD;
        }
    }

    return res;
};
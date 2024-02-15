/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
        const m = grid.length;
    const n = grid[0].length;

    const rowOnes = new Array(m).fill(0);
    const colOnes = new Array(n).fill(0);

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            rowOnes[i] += grid[i][j];
            colOnes[j] += grid[i][j];
        }
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            grid[i][j] = (rowOnes[i] + colOnes[j]) -(m-rowOnes[i]) - (n-colOnes[j]);
        }
    }

    return grid;
};
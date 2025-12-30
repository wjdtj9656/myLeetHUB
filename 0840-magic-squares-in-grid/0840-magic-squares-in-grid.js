/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    if (rows < 3 || cols < 3) return 0;

    for (let r = 0; r <= rows - 3; r++) {
        for (let c = 0; c <= cols - 3; c++) {
            if (isMagic(grid, r, c)) {
                count++;
            }
        }
    }

    return count;
};

function isMagic(grid, r, c) {
    if (grid[r + 1][c + 1] !== 5) return false;

    const values = new Set();
    for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
            const val = grid[i][j];
            if (val < 1 || val > 9 || values.has(val)) return false;
            values.add(val);
        }
    }

    const row1 = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];
    const row2 = grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2];
    const row3 = grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2];

    const col1 = grid[r][c] + grid[r + 1][c] + grid[r + 2][c];
    const col2 = grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1];
    const col3 = grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2];

    const diag1 = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2];
    const diag2 = grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c];

    return (
        row1 === 15 && row2 === 15 && row3 === 15 &&
        col1 === 15 && col2 === 15 && col3 === 15 &&
        diag1 === 15 && diag2 === 15
    );
}
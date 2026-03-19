/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
    const R = grid.length;
    const C = grid[0].length;
    
    const diff = Array.from({ length: R + 1 }, () => new Int32Array(C + 1));
    const countX = Array.from({ length: R + 1 }, () => new Int32Array(C + 1));
    
    let ans = 0;

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            let v = 0;
            if (grid[r][c] === 'X') v = 1;
            else if (grid[r][c] === 'Y') v = -1;

            let isX = (grid[r][c] === 'X' ? 1 : 0);

            diff[r + 1][c + 1] = v + diff[r][c + 1] + diff[r + 1][c] - diff[r][c];
            countX[r + 1][c + 1] = isX + countX[r][c + 1] + countX[r + 1][c] - countX[r][c];

            if (diff[r + 1][c + 1] === 0 && countX[r + 1][c + 1] > 0) {
                ans++;
            }
        }
    }

    return ans;
};
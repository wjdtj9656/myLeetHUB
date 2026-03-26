var getBiggestThree = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const sums = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            sums.add(grid[i][j]);
            let L = 1;
            while (i + 2 * L < m && j - L >= 0 && j + L < n) {
                let sum = grid[i][j] + grid[i + L][j + L] + grid[i + 2 * L][j] + grid[i + L][j - L];
                for (let k = 1; k < L; k++) {
                    sum += grid[i + k][j + k];
                    sum += grid[i + L + k][j + L - k];
                    sum += grid[i + 2 * L - k][j - k];
                    sum += grid[i + L - k][j - L + k];
                }
                sums.add(sum);
                L++;
            }
        }
    }

    return Array.from(sums).sort((a, b) => b - a).slice(0, 3);
};
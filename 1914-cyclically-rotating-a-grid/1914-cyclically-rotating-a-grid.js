var rotateGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const layers = Math.min(m, n) / 2;

    for (let l = 0; l < layers; l++) {
        let elements = [];
        
        for (let j = l; j < n - l; j++) elements.push(grid[l][j]);
        for (let i = l + 1; i < m - l; i++) elements.push(grid[i][n - 1 - l]);
        for (let j = n - 2 - l; j >= l; j--) elements.push(grid[m - 1 - l][j]);
        for (let i = m - 2 - l; i > l; i--) elements.push(grid[i][l]);

        const len = elements.length;
        const shift = k % len;
        const rotated = elements.slice(shift).concat(elements.slice(0, shift));

        let idx = 0;
        for (let j = l; j < n - l; j++) grid[l][j] = rotated[idx++];
        for (let i = l + 1; i < m - l; i++) grid[i][n - 1 - l] = rotated[idx++];
        for (let j = n - 2 - l; j >= l; j--) grid[m - 1 - l][j] = rotated[idx++];
        for (let i = m - 2 - l; i > l; i--) grid[i][l] = rotated[idx++];
    }

    return grid;
};
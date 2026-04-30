function maxPathScore(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    
    let dp = Array.from({ length: m }, () => 
        Array.from({ length: n }, () => new Int32Array(k + 1).fill(-1))
    );

    dp[0][0][0] = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let c = 0; c <= k; c++) {
                if (dp[i][j][c] === -1) continue;

                const directions = [[i + 1, j], [i, j + 1]];
                
                for (const [ni, nj] of directions) {
                    if (ni < m && nj < n) {
                        const cellValue = grid[ni][nj];
                        const nextScore = cellValue === 0 ? 0 : cellValue;
                        const nextCost = cellValue === 0 ? 0 : 1;

                        if (c + nextCost <= k) {
                            dp[ni][nj][c + nextCost] = Math.max(
                                dp[ni][nj][c + nextCost], 
                                dp[i][j][c] + nextScore
                            );
                        }
                    }
                }
            }
        }
    }

    let maxResult = -1;
    for (let c = 0; c <= k; c++) {
        maxResult = Math.max(maxResult, dp[m - 1][n - 1][c]);
    }

    return maxResult;
}
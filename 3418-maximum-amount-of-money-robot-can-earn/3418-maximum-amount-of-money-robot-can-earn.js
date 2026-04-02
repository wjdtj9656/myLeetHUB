var maximumAmount = function(coins) {
    const m = coins.length;
    const n = coins[0].length;
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => new Float64Array(3).fill(-Infinity))
    );

    dp[0][0][0] = coins[0][0];
    dp[0][0][1] = Math.max(0, coins[0][0]);
    dp[0][0][2] = Math.max(0, coins[0][0]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;

            for (let k = 0; k < 3; k++) {
                let prevSameK = -Infinity;
                if (i > 0) prevSameK = Math.max(prevSameK, dp[i - 1][j][k]);
                if (j > 0) prevSameK = Math.max(prevSameK, dp[i][j - 1][k]);

                if (prevSameK !== -Infinity) {
                    dp[i][j][k] = prevSameK + coins[i][j];
                }

                if (k > 0) {
                    let prevLessK = -Infinity;
                    if (i > 0) prevLessK = Math.max(prevLessK, dp[i - 1][j][k - 1]);
                    if (j > 0) prevLessK = Math.max(prevLessK, dp[i][j - 1][k - 1]);

                    if (prevLessK !== -Infinity) {
                        dp[i][j][k] = Math.max(dp[i][j][k], prevLessK);
                    }
                }
            }
        }
    }

    return Math.max(dp[m - 1][n - 1][0], dp[m - 1][n - 1][1], dp[m - 1][n - 1][2]);
};
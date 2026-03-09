var numberOfStableArrays = function(zero, one, limit) {
    const MOD = 1e9 + 7;
    const dp = Array.from({ length: zero + 1 }, () =>
        Array.from({ length: one + 1 }, () => [0, 0])
    );

    for (let i = 1; i <= Math.min(zero, limit); i++) {
        dp[i][0][0] = 1;
    }
    for (let j = 1; j <= Math.min(one, limit); j++) {
        dp[0][j][1] = 1;
    }

    for (let i = 1; i <= zero; i++) {
        for (let j = 1; j <= one; j++) {
            for (let k = 1; k <= Math.min(i, limit); k++) {
                dp[i][j][0] = (dp[i][j][0] + dp[i - k][j][1]) % MOD;
            }
            for (let k = 1; k <= Math.min(j, limit); k++) {
                dp[i][j][1] = (dp[i][j][1] + dp[i][j - k][0]) % MOD;
            }
        }
    }

    return (dp[zero][one][0] + dp[zero][one][1]) % MOD;
};
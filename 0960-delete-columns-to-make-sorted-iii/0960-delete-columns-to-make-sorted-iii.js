var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;
    const dp = new Array(m).fill(1);
    let maxKeep = 1;

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < i; j++) {
            let possible = true;
            for (let k = 0; k < n; k++) {
                if (strs[k][j] > strs[k][i]) {
                    possible = false;
                    break;
                }
            }
            if (possible) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxKeep = Math.max(maxKeep, dp[i]);
    }

    return m - maxKeep;
};
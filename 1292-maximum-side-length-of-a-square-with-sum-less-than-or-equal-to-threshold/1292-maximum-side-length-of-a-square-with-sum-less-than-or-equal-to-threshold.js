var maxSideLength = function(mat, threshold) {
    const m = mat.length;
    const n = mat[0].length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = mat[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1];
        }
    }

    const getSum = (r, c, len) => {
        return dp[r][c] - dp[r-len][c] - dp[r][c-len] + dp[r-len][c-len];
    };

    let left = 0;
    let right = Math.min(m, n);
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let found = false;

        for (let i = mid; i <= m; i++) {
            for (let j = mid; j <= n; j++) {
                if (getSum(i, j, mid) <= threshold) {
                    found = true;
                    break;
                }
            }
            if (found) break;
        }

        if (found) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
};
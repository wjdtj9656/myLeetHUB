var shortestCommonSupersequence = function (str1, str2) {
    let m = str1.length, n = str2.length;
    let lcs = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                lcs[i][j] = 1 + lcs[i - 1][j - 1];
            } else {
                lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
            }
        }
    }

    let i = m, j = n;
    let result = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result.push(str1[i - 1]);
            i--; j--;
        } else if (lcs[i - 1][j] > lcs[i][j - 1]) {
            result.push(str1[i - 1]);
            i--;
        } else {
            result.push(str2[j - 1]);
            j--;
        }
    }

    while (i > 0) result.push(str1[--i]);
    while (j > 0) result.push(str2[--j]);

    return result.reverse().join("");
};
var rangeAddQueries = function(n, queries) {
    const diff = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    
    for (const [r1, c1, r2, c2] of queries) {
        diff[r1][c1] += 1;
        if (c2 + 1 < n) diff[r1][c2 + 1] -= 1;
        if (r2 + 1 < n) diff[r2 + 1][c1] -= 1;
        if (r2 + 1 < n && c2 + 1 < n) diff[r2 + 1][c2 + 1] += 1;
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            diff[i][j] += diff[i][j - 1];
        }
    }
    
    for (let j = 0; j < n; j++) {
        for (let i = 1; i < n; i++) {
            diff[i][j] += diff[i - 1][j];
        }
    }
    
    const res = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = diff[i][j];
        }
    }
    
    return res;
};

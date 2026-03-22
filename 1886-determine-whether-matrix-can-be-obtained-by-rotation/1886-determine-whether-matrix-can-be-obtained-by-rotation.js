var findRotation = function(mat, target) {
    const n = mat.length;
    let c = [true, true, true, true];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== target[i][j]) c[0] = false;
            if (mat[i][j] !== target[j][n - 1 - i]) c[1] = false;
            if (mat[i][j] !== target[n - 1 - i][n - 1 - j]) c[2] = false;
            if (mat[i][j] !== target[n - 1 - j][i]) c[3] = false;
        }
    }
    
    return c[0] || c[1] || c[2] || c[3];
};
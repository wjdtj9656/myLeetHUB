const searchMatrix = (matrix, target) => {
    if (matrix.length === 0) return false;

    const dfs = (i, j) => {
        if (i >= matrix.length || j >= matrix[i].length || status === true || matrix[i][j] === Number.MAX_VALUE) {
            return;
        }

        if (matrix[i][j] === target) {
            status = true;
            return;
        }

        matrix[i][j] = Number.MAX_VALUE;
        dfs(i + 1, j);
        dfs(i, j + 1);
    };

    let status = false;
    dfs(0, 0);
    return status;
};
var containsCycle = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    function dfs(r, c, pr, pc, char) {
        visited[r][c] = true;

        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === char) {
                if (!visited[nr][nc]) {
                    if (dfs(nr, nc, r, c, char)) return true;
                } else if (nr !== pr || nc !== pc) {
                    return true;
                }
            }
        }
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1, grid[i][j])) {
                    return true;
                }
            }
        }
    }

    return false;
};
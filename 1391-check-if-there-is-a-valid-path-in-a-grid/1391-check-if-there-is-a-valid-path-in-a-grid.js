var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    
    const dirs = {
        1: [[0, -1], [0, 1]],
        2: [[-1, 0], [1, 0]],
        3: [[0, -1], [1, 0]],
        4: [[0, 1], [1, 0]],
        5: [[0, -1], [-1, 0]],
        6: [[0, 1], [-1, 0]]
    };

    const queue = [[0, 0]];
    let head = 0;
    visited[0][0] = true;

    while (head < queue.length) {
        const [r, c] = queue[head++];

        if (r === m - 1 && c === n - 1) return true;

        for (const [dr, dc] of dirs[grid[r][c]]) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
                const nextPipe = grid[nr][nc];
                let connected = false;
                
                for (const [ndr, ndc] of dirs[nextPipe]) {
                    if (ndr === -dr && ndc === -dc) {
                        connected = true;
                        break;
                    }
                }
                
                if (connected) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }
    }
    
    return false;
};
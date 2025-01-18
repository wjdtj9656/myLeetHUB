/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const dy = [1, -1, 0, 0]; // 1: 오른쪽, 2: 왼쪽, 3: 아래쪽, 4: 위쪽
    const dx = [0, 0, 1, -1];

    const m = grid.length;
    const n = grid[0].length;

    const cost = Array.from({ length: m }, () => Array(n).fill(Infinity));
    cost[0][0] = 0;

    const deque = [];
    deque.push([0, 0]);

    while (deque.length > 0) {
        const [x, y] = deque.shift();

        if (x === m - 1 && y === n - 1) {
            return cost[x][y];
        }

        const cur = grid[x][y];
        const [cdx, cdy] = [dx[cur - 1], dy[cur - 1]];
        const nx = x + cdx;
        const ny = y + cdy;

        if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
            if (cost[nx][ny] > cost[x][y]) {
                cost[nx][ny] = cost[x][y];
                deque.unshift([nx, ny]); 
            }
        }

        for (let dir = 0; dir < 4; dir++) {
            if (dir === (cur - 1)) continue; 
            const [ndx, ndy] = [dx[dir], dy[dir]];
            const nnx = x + ndx;
            const nny = y + ndy;

            if (nnx >= 0 && nnx < m && nny >= 0 && nny < n) {
                if (cost[nnx][nny] > cost[x][y] + 1) {
                    cost[nnx][nny] = cost[x][y] + 1;
                    deque.push([nnx, nny]);
                }
            }
        }
    }

    return cost[m - 1][n - 1] === Infinity ? -1 : cost[m - 1][n - 1];
};

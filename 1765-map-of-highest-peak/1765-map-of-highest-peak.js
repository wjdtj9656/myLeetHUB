var highestPeak = function(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;
    
    const res = Array.from({length: m}, () => Array(n).fill(-1));
    const queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                res[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    let front = 0;

    while (front < queue.length) {
        const [x, y] = queue[front++];
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && res[nx][ny] === -1) {
                res[nx][ny] = res[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return res;
};
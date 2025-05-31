function snakesAndLadders(board) {
    const n = board.length;
    const N = n * n;
    const getRC = s => {
        const quot = Math.floor((s - 1) / n);
        const row = n - 1 - quot;
        const rem = (s - 1) % n;
        if ((n - 1 - row) % 2 === 0) {
            return [row, rem];
        } else {
            return [row, n - 1 - rem];
        }
    };
    const dist = Array(N + 1).fill(-1);
    const queue = [];
    dist[1] = 0;
    queue.push(1);
    for (let qi = 0; qi < queue.length; qi++) {
        const curr = queue[qi];
        if (curr === N) return dist[curr];
        for (let next = curr + 1; next <= Math.min(curr + 6, N); next++) {
            const [r, c] = getRC(next);
            const dest = board[r][c] !== -1 ? board[r][c] : next;
            if (dist[dest] === -1) {
                dist[dest] = dist[curr] + 1;
                queue.push(dest);
            }
        }
    }
    return -1;
}

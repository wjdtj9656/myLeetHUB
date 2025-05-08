class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(item) {
        this.heap.push(item);
        this._bubbleUp();
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return top;
    }
    _bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[p][0] <= this.heap[i][0]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }
    _bubbleDown() {
        let i = 0, n = this.heap.length;
        while (true) {
            let l = 2*i + 1, r = 2*i + 2, s = i;
            if (l < n && this.heap[l][0] < this.heap[s][0]) s = l;
            if (r < n && this.heap[r][0] < this.heap[s][0]) s = r;
            if (s === i) break;
            [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
            i = s;
        }
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

function minTimeToReach(moveTime) {
    const n = moveTime.length, m = moveTime[0].length;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const visited = Array.from({length:n}, () => 
                      Array.from({length:m}, () => [Infinity, Infinity]));
    const heap = new MinHeap();
    heap.push([0, 0, 0, 0]);
    visited[0][0][0] = 0;

    while (!heap.isEmpty()) {
        const [time, x, y, parity] = heap.pop();
        if (time > visited[x][y][parity]) continue;
        if (x === n-1 && y === m-1) return time;

        for (const [dx,dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (nx<0||ny<0||nx>=n||ny>=m) continue;
            const moveCost = (parity === 0 ? 1 : 2);
            const depart = Math.max(time, moveTime[nx][ny]);
            const arrive = depart + moveCost;
            const nextParity = 1 - parity;
            if (arrive < visited[nx][ny][nextParity]) {
                visited[nx][ny][nextParity] = arrive;
                heap.push([arrive, nx, ny, nextParity]);
            }
        }
    }

    return -1;
}
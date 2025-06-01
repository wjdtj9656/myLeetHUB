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
            let p = Math.floor((i - 1) / 2);
            if (this.heap[i][0] >= this.heap[p][0]) break;
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }
    _bubbleDown() {
        let i = 0, len = this.heap.length;
        while (true) {
            let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
            if (left < len && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
            if (right < len && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

function minTimeToReach(moveTime) {
    const n = moveTime.length, m = moveTime[0].length;
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]];
    const dist = Array.from({ length: n }, () => Array(m).fill(Infinity));
    const pq = new MinHeap();
    dist[0][0] = 0;
    pq.push([0, 0, 0]);
    while (!pq.isEmpty()) {
        const [t, x, y] = pq.pop();
        if (t > dist[x][y]) continue;
        if (x === n - 1 && y === m - 1) return t;
        for (const [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            const arrive = Math.max(t, moveTime[nx][ny]) + 1;
            if (arrive < dist[nx][ny]) {
                dist[nx][ny] = arrive;
                pq.push([arrive, nx, ny]);
            }
        }
    }
    return -1;
}
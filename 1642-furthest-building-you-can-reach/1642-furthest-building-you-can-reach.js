class MinHeap {
    constructor() {
        this.heap = [null];
    }
    push(val) {
        this.heap.push(val);
        let cur = this.heap.length - 1;
        let p = cur / 2 >> 0;
        while (p != 0 && this.heap[cur] < this.heap[p]) {
            [this.heap[cur], this.heap[p]] = [this.heap[p], this.heap[cur]];
            cur = p;
            p = cur / 2 >> 0;
        }
    }
    pop() {
        if (this.heap.length == 1) return;
        if (this.heap.length == 2) return this.heap.pop();

        let val = this.heap[1];
        this.heap[1] = this.heap.pop();

        let cur = 1;
        let left = 2;
        let right = 3;
        while ((this.heap[left] && this.heap[cur] > this.heap[left])
            || (this.heap[right] && this.heap[cur] > this.heap[right])) {
            if (this.heap[left] == undefined) {
                [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
            }
            else if (this.heap[right] == undefined) {
                [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
            }
            else if (this.heap[left] >= this.heap[right]) {
                [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
                cur = right;
            }
            else if (this.heap[left] < this.heap[right]) {
                [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
                cur = left;
            }
            left = cur * 2;
            right = cur * 2 + 1;
        }
        return val;
    }
    peek() {
        return this.heap[1];
    }
    len() {
        return this.heap.length-1;
    }
}
var furthestBuilding = function (heights, bricks, ladders) {
    let len = heights.length - 1
    const pq = new MinHeap();
    for (let i = 0; i < len; i++) {
        let dif = heights[i + 1] - heights[i];
        if (dif > 0) {
            if (ladders > 0) {
                pq.push(dif);
                ladders--;
            }
            else if (pq.len() > 0 && pq.peek() < dif) {
                pq.push(dif);
                bricks -= pq.pop();
            }
            else {
                bricks -= dif;
            }
            if (bricks < 0) {
                return i
            }
        }
    }
    return len;
};
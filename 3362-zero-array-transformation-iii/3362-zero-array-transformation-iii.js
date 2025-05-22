function maxRemoval(nums, queries) {
    queries.sort((a, b) => a[0] - b[0]);
    const n = nums.length;
    let ops = 0, r = 0;
    const delta = new Array(n + 1).fill(0);

    class MaxHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this._bubbleUp();
        }

        pop() {
            if (this.heap.length === 0) return null;
            const top = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this._sinkDown();
            }
            return top;
        }

        peek() {
            return this.heap.length > 0 ? this.heap[0] : null;
        }

        _bubbleUp() {
            let idx = this.heap.length - 1;
            const el = this.heap[idx];
            while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                if (this.heap[parentIdx] >= el) break;
                this.heap[idx] = this.heap[parentIdx];
                idx = parentIdx;
            }
            this.heap[idx] = el;
        }

        _sinkDown() {
            let idx = 0;
            const length = this.heap.length;
            const el = this.heap[0];
            while (true) {
                let leftIdx = 2 * idx + 1;
                let rightIdx = 2 * idx + 2;
                let swap = null;

                if (leftIdx < length && this.heap[leftIdx] > el) {
                    swap = leftIdx;
                }
                if (
                    rightIdx < length &&
                    this.heap[rightIdx] > (swap === null ? el : this.heap[leftIdx])
                ) {
                    swap = rightIdx;
                }
                if (swap === null) break;
                this.heap[idx] = this.heap[swap];
                idx = swap;
            }
            this.heap[idx] = el;
        }

        isEmpty() {
            return this.heap.length === 0;
        }

        size() {
            return this.heap.length;
        }
    }

    const heap = new MaxHeap();

    for (let l = 0; l < n; l++) {
        ops += delta[l];

        while (r < queries.length && queries[r][0] === l) {
            heap.push(queries[r][1]);
            r++;
        }

        while (ops < nums[l]) {
            if (heap.isEmpty() || heap.peek() < l) {
                return -1;
            }
            const end = heap.pop();
            delta[end + 1] -= 1;
            ops += 1;
        }
    }

    return heap.size();
}

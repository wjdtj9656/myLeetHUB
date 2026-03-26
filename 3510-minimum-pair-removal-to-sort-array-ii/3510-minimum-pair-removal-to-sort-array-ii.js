/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    const n = nums.length;
    if (n < 2) return 0;

    const V = new Float64Array(n);
    const L = new Int32Array(n);
    const R = new Int32Array(n);
    
    for (let i = 0; i < n; i++) {
        V[i] = nums[i];
        L[i] = i - 1;
        R[i] = i + 1;
    }
    R[n - 1] = -1;

    const heap = [];
    
    function push(s, i) {
        const node = { s, i };
        heap.push(node);
        let idx = heap.length - 1;
        while (idx > 0) {
            const pIdx = (idx - 1) >>> 1;
            const p = heap[pIdx];
            if (node.s < p.s || (node.s === p.s && node.i < p.i)) {
                heap[idx] = p;
                heap[pIdx] = node;
                idx = pIdx;
            } else {
                break;
            }
        }
    }

    function pop() {
        if (heap.length === 0) return null;
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let idx = 0;
            const len = heap.length;
            while (true) {
                let left = (idx << 1) + 1;
                let right = left + 1;
                let smallest = idx;
                
                if (left < len) {
                    const lNode = heap[left];
                    const sNode = heap[smallest];
                    if (lNode.s < sNode.s || (lNode.s === sNode.s && lNode.i < sNode.i)) {
                        smallest = left;
                    }
                }
                
                if (right < len) {
                    const rNode = heap[right];
                    const sNode = heap[smallest];
                    if (rNode.s < sNode.s || (rNode.s === sNode.s && rNode.i < sNode.i)) {
                        smallest = right;
                    }
                }
                
                if (smallest !== idx) {
                    const temp = heap[idx];
                    heap[idx] = heap[smallest];
                    heap[smallest] = temp;
                    idx = smallest;
                } else {
                    break;
                }
            }
        }
        return top;
    }

    let unsortedCount = 0;
    for (let i = 0; i < n - 1; i++) {
        push(V[i] + V[i+1], i);
        if (V[i] > V[i+1]) unsortedCount++;
    }

    if (unsortedCount === 0) return 0;

    let ops = 0;
    const removed = new Uint8Array(n);

    while (unsortedCount > 0 && heap.length > 0) {
        const item = pop();
        const i = item.i;
        
        if (removed[i]) continue;
        
        const nextIdx = R[i];
        if (nextIdx === -1 || removed[nextIdx]) continue;

        if (V[i] + V[nextIdx] !== item.s) continue;

        const prevIdx = L[i];
        const nextNextIdx = R[nextIdx];

        if (V[i] > V[nextIdx]) unsortedCount--;
        if (prevIdx !== -1 && V[prevIdx] > V[i]) unsortedCount--;
        if (nextNextIdx !== -1 && V[nextIdx] > V[nextNextIdx]) unsortedCount--;

        V[i] += V[nextIdx];
        
        removed[nextIdx] = 1;
        R[i] = nextNextIdx;
        if (nextNextIdx !== -1) {
            L[nextNextIdx] = i;
        }

        if (prevIdx !== -1 && V[prevIdx] > V[i]) unsortedCount++;
        if (nextNextIdx !== -1 && V[i] > V[nextNextIdx]) unsortedCount++;

        if (prevIdx !== -1) {
            push(V[prevIdx] + V[i], prevIdx);
        }
        if (nextNextIdx !== -1) {
            push(V[i] + V[nextNextIdx], i);
        }

        ops++;
    }

    return ops;
};
function longestBalanced(nums) {
    const n = nums.length;
    if (n === 0) return 0;

    const minTree = new Int32Array(4 * n).fill(1e9);
    const maxTree = new Int32Array(4 * n).fill(1e9);
    const lazy = new Int32Array(4 * n);

    function activate(node, l, r, pos) {
        if (l === r) {
            minTree[node] = 0;
            maxTree[node] = 0;
            return;
        }
        push(node);
        const mid = (l + r) >> 1;
        if (pos <= mid) activate(node * 2, l, mid, pos);
        else activate(node * 2 + 1, mid + 1, r, pos);
        minTree[node] = Math.min(minTree[node * 2], minTree[node * 2 + 1]);
        maxTree[node] = Math.max(maxTree[node * 2], maxTree[node * 2 + 1]);
    }

    function update(node, l, r, ql, qr, val) {
        if (ql <= l && r <= qr) {
            minTree[node] += val;
            maxTree[node] += val;
            lazy[node] += val;
            return;
        }
        push(node);
        const mid = (l + r) >> 1;
        if (ql <= mid) update(node * 2, l, mid, ql, qr, val);
        if (qr > mid) update(node * 2 + 1, mid + 1, r, ql, qr, val);
        minTree[node] = Math.min(minTree[node * 2], minTree[node * 2 + 1]);
        maxTree[node] = Math.max(maxTree[node * 2], maxTree[node * 2 + 1]);
    }

    function push(node) {
        if (lazy[node] !== 0) {
            const val = lazy[node];
            const left = node * 2;
            const right = left + 1;
            minTree[left] += val;
            maxTree[left] += val;
            lazy[left] += val;
            minTree[right] += val;
            maxTree[right] += val;
            lazy[right] += val;
            lazy[node] = 0;
        }
    }

    function queryFirstZero(node, l, r) {
        if (minTree[node] > 0 || maxTree[node] < 0) return -1;
        if (l === r) return l;
        push(node);
        const mid = (l + r) >> 1;
        let res = queryFirstZero(node * 2, l, mid);
        if (res !== -1) return res;
        return queryFirstZero(node * 2 + 1, mid + 1, r);
    }

    const lastPos = new Map();
    let maxLen = 0;

    for (let r = 0; r < n; r++) {
        activate(1, 0, n - 1, r);
        const val = nums[r];
        const change = val % 2 === 0 ? 1 : -1;
        const prev = lastPos.has(val) ? lastPos.get(val) : -1;
        
        if (prev + 1 <= r) {
            update(1, 0, n - 1, prev + 1, r, change);
        }
        lastPos.set(val, r);

        const firstZero = queryFirstZero(1, 0, n - 1);
        if (firstZero !== -1) {
            const len = r - firstZero + 1;
            if (len > maxLen) {
                maxLen = len;
            }
        }
    }

    return maxLen;
}
function minOperations(nums) {
    const n = nums.length;
    let mx = 0;
    for (let i = 0; i < n; i++) if (nums[i] > mx) mx = nums[i];

    const pos = Array(mx + 1);
    for (let v = 0; v <= mx; v++) pos[v] = [];
    for (let i = 0; i < n; i++) {
        const v = nums[i];
        if (v > 0) pos[v].push(i);
    }

    const parent = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;

    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a === b) return;
        parent[b] = a;
    };

    const active = new Array(n).fill(false);
    let ans = 0;

    for (let v = mx; v >= 1; v--) {
        const idxs = pos[v];
        if (!idxs || idxs.length === 0) continue;

        for (let k = 0; k < idxs.length; k++) {
            const i = idxs[k];
            active[i] = true;
            if (i > 0 && active[i - 1]) union(i, i - 1);
            if (i + 1 < n && active[i + 1]) union(i, i + 1);
        }

        const roots = new Set();
        for (let k = 0; k < idxs.length; k++) {
            const i = idxs[k];
            if (active[i]) roots.add(find(i));
        }
        ans += roots.size;
    }

    return ans;
}

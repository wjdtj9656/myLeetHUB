function minimumScore(nums, edges) {
    const n = nums.length;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const parent = Array(n).fill(-1);
    const tin = Array(n).fill(0), tout = Array(n).fill(0), subxor = Array(n).fill(0);
    let timer = 0;
    function dfs(u, p) {
        parent[u] = p;
        tin[u] = ++timer;
        let x = nums[u];
        for (const v of adj[u]) {
            if (v === p) continue;
            x ^= dfs(v, u);
        }
        subxor[u] = x;
        tout[u] = timer;
        return x;
    }
    dfs(0, -1);
    const total = subxor[0];
    let ans = Infinity;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const x = subxor[i], y = subxor[j];
            let a, b, c;
            if (tin[i] <= tin[j] && tout[j] <= tout[i]) {
                a = y;
                b = x ^ y;
                c = total ^ x;
            } else if (tin[j] <= tin[i] && tout[i] <= tout[j]) {
                a = x;
                b = x ^ y;
                c = total ^ y;
            } else {
                a = x;
                b = y;
                c = total ^ x ^ y;
            }
            const mx = Math.max(a, b, c), mn = Math.min(a, b, c);
            ans = Math.min(ans, mx - mn);
        }
    }
    return ans;
}

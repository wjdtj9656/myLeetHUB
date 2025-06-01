function maxTargetNodes(edges1, edges2, k) {
    const n = edges1.length + 1;
    const m = edges2.length + 1;
    const adj1 = Array.from({ length: n }, () => []);
    const adj2 = Array.from({ length: m }, () => []);
    for (const [u, v] of edges1) {
        adj1[u].push(v);
        adj1[v].push(u);
    }
    for (const [u, v] of edges2) {
        adj2[u].push(v);
        adj2[v].push(u);
    }
    function bfsCount(adj, start, limit) {
        const N = adj.length;
        const dist = Array(N).fill(-1);
        const q = [];
        let qi = 0;
        q.push(start);
        dist[start] = 0;
        let c = 0;
        while (qi < q.length) {
            const u = q[qi++];
            if (dist[u] > limit) break;
            c++;
            for (const v of adj[u]) {
                if (dist[v] === -1) {
                    dist[v] = dist[u] + 1;
                    q.push(v);
                }
            }
        }
        return c;
    }
    let maxB = 0;
    if (k > 0) {
        const lim2 = k - 1;
        for (let j = 0; j < m; j++) {
            const bj = bfsCount(adj2, j, lim2);
            if (bj > maxB) maxB = bj;
        }
    }
    const ans = Array(n);
    for (let i = 0; i < n; i++) {
        const ai = bfsCount(adj1, i, k);
        ans[i] = ai + maxB;
    }
    return ans;
}

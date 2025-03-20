function minimumCost(n, edges, queries) {
    const parent = Array(n).fill(0).map((_, i) => i);
    function find(x) {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }
    function union(x, y) {
        const rx = find(x), ry = find(y);
        if (rx !== ry) parent[ry] = rx;
    }
    for (const [u, v, w] of edges) {
        union(u, v);
    }
    const compMask = {};
    for (const [u, v, w] of edges) {
        const rep = find(u);
        compMask[rep] = compMask[rep] === undefined ? w : compMask[rep] & w;
    }
    const result = [];
    for (const [s, t] of queries) {
        if (find(s) !== find(t)) {
            result.push(-1);
        } else {
            const rep = find(s);
            result.push(compMask[rep] === undefined ? -1 : compMask[rep]);
        }
    }
    return result;
}
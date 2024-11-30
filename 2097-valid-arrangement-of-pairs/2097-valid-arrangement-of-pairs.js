function validArrangement(pairs) {
    const graph = new Map();
    const inDegree = new Map();
    const outDegree = new Map();

    for (const [start, end] of pairs) {
        if (!graph.has(start)) graph.set(start, []);
        graph.get(start).push(end);

        outDegree.set(start, (outDegree.get(start) || 0) + 1);
        inDegree.set(end, (inDegree.get(end) || 0) + 1);
    }

    let startNode = null;
    for (const node of graph.keys()) {
        const out = outDegree.get(node) || 0;
        const inDeg = inDegree.get(node) || 0;
        if (out - inDeg === 1) {
            startNode = node;
            break;
        }
    }
    if (startNode === null) {
        startNode = pairs[0][0];
    }
    const path = [];
    function dfs(u) {
        const edges = graph.get(u) || [];
        while (edges.length > 0) {
            const v = edges.pop();
            dfs(v);
            path.push([u, v]);
        }
    }

    dfs(startNode);

    return path.reverse();
}

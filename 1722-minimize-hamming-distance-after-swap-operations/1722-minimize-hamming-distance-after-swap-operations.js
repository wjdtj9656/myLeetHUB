function minimumHammingDistance(source, target, allowedSwaps) {
    const n = source.length;
    const parent = new Array(n);
    
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }

    function find(i) {
        if (parent[i] === i) return i;
        return parent[i] = find(parent[i]);
    }

    function union(i, j) {
        const rootI = find(i);
        const rootJ = find(j);
        if (rootI !== rootJ) {
            parent[rootI] = rootJ;
        }
    }

    for (const [u, v] of allowedSwaps) {
        union(u, v);
    }

    const map = new Map();
    for (let i = 0; i < n; i++) {
        const root = find(i);
        if (!map.has(root)) {
            map.set(root, new Map());
        }
        const countMap = map.get(root);
        countMap.set(source[i], (countMap.get(source[i]) || 0) + 1);
    }

    let distance = 0;
    for (let i = 0; i < n; i++) {
        const root = find(i);
        const countMap = map.get(root);
        
        if (countMap && countMap.get(target[i]) > 0) {
            countMap.set(target[i], countMap.get(target[i]) - 1);
        } else {
            distance++;
        }
    }

    return distance;
}
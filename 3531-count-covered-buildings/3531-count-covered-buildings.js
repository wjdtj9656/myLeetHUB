function countCoveredBuildings(n, buildings) {
    const rowMap = new Map();
    const colMap = new Map();

    for (const [x, y] of buildings) {
        if (!rowMap.has(x)) rowMap.set(x, []);
        rowMap.get(x).push(y);

        if (!colMap.has(y)) colMap.set(y, []);
        colMap.get(y).push(x);
    }

    const horizontal = new Set();
    for (const [x, ys] of rowMap) {
        ys.sort((a, b) => a - b);
        for (let i = 1; i < ys.length - 1; i++) {
            const y = ys[i];
            horizontal.add(x + "," + y);
        }
    }

    const vertical = new Set();
    for (const [y, xs] of colMap) {
        xs.sort((a, b) => a - b);
        for (let i = 1; i < xs.length - 1; i++) {
            const x = xs[i];
            vertical.add(x + "," + y);
        }
    }

    let count = 0;
    for (const key of horizontal) {
        if (vertical.has(key)) count++;
    }

    return count;
}

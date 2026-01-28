/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var minCost = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const INF = 1e9;

    const dist = new Int32Array(m * n).fill(INF);
    dist[0] = 0;

    const heapCost = new Int32Array(m * n * 2);
    const heapPos = new Int32Array(m * n * 2);
    let heapSize = 0;

    function push(cost, r, c) {
        let idx = heapSize++;
        const pos = (r << 8) | c;
        while (idx > 0) {
            const p = (idx - 1) >>> 1;
            if (heapCost[p] <= cost) break;
            heapCost[idx] = heapCost[p];
            heapPos[idx] = heapPos[p];
            idx = p;
        }
        heapCost[idx] = cost;
        heapPos[idx] = pos;
    }

    function pop() {
        if (heapSize === 0) return null;
        const retCost = heapCost[0];
        const retPos = heapPos[0];
        const lastCost = heapCost[--heapSize];
        const lastPos = heapPos[heapSize];
        
        if (heapSize > 0) {
            let idx = 0;
            while ((idx << 1) + 1 < heapSize) {
                let child = (idx << 1) + 1;
                if (child + 1 < heapSize && heapCost[child + 1] < heapCost[child]) {
                    child++;
                }
                if (lastCost <= heapCost[child]) break;
                heapCost[idx] = heapCost[child];
                heapPos[idx] = heapPos[child];
                idx = child;
            }
            heapCost[idx] = lastCost;
            heapPos[idx] = lastPos;
        }
        return { cost: retCost, r: retPos >> 8, c: retPos & 0xFF };
    }

    push(0, 0, 0);

    const minValCost = new Int32Array(10005);
    
    for (let round = 0; round <= k; round++) {
        while (heapSize > 0) {
            const { cost, r, c } = pop();
            const idx = r * n + c;

            if (cost > dist[idx]) continue;

            if (c + 1 < n) {
                const nextCost = cost + grid[r][c + 1];
                const nextIdx = idx + 1;
                if (nextCost < dist[nextIdx]) {
                    dist[nextIdx] = nextCost;
                    push(nextCost, r, c + 1);
                }
            }
            if (r + 1 < m) {
                const nextCost = cost + grid[r + 1][c];
                const nextIdx = idx + n;
                if (nextCost < dist[nextIdx]) {
                    dist[nextIdx] = nextCost;
                    push(nextCost, r + 1, c);
                }
            }
        }

        if (round < k) {
            minValCost.fill(INF);
            for (let r = 0; r < m; r++) {
                let rowOffset = r * n;
                for (let c = 0; c < n; c++) {
                    const d = dist[rowOffset + c];
                    if (d !== INF) {
                        const val = grid[r][c];
                        if (d < minValCost[val]) minValCost[val] = d;
                    }
                }
            }

            for (let v = 10003; v >= 0; v--) {
                if (minValCost[v + 1] < minValCost[v]) {
                    minValCost[v] = minValCost[v + 1];
                }
            }

            let updated = false;
            for (let r = 0; r < m; r++) {
                let rowOffset = r * n;
                for (let c = 0; c < n; c++) {
                    const val = grid[r][c];
                    const teleportCost = minValCost[val];
                    if (teleportCost < dist[rowOffset + c]) {
                        dist[rowOffset + c] = teleportCost;
                        push(teleportCost, r, c);
                        updated = true;
                    }
                }
            }
            if (!updated) break;
        }
    }

    return dist[m * n - 1];
};
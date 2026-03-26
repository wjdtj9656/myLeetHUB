var maxStability = function(n, edges, k) {
    class DSU {
        constructor(size) {
            this.parent = Array.from({ length: size }, (_, i) => i);
            this.components = size;
        }
        find(i) {
            if (this.parent[i] === i) return i;
            return this.parent[i] = this.find(this.parent[i]);
        }
        union(i, j) {
            let rootI = this.find(i);
            let rootJ = this.find(j);
            if (rootI !== rootJ) {
                this.parent[rootI] = rootJ;
                this.components--;
                return true;
            }
            return false;
        }
    }

    const check = (threshold) => {
        const dsu = new DSU(n);
        let upgradesUsed = 0;
        let edgesUsedCount = 0;
        
        const mustEdges = [];
        const canUpgrade = [];
        const noUpgrade = [];

        for (const edge of edges) {
            const [u, v, s, must] = edge;
            if (must === 1) {
                if (s < threshold) return false;
                mustEdges.push([u, v]);
            } else {
                if (s >= threshold) {
                    noUpgrade.push([u, v]);
                } else if (s * 2 >= threshold) {
                    canUpgrade.push([u, v]);
                }
            }
        }

        for (const [u, v] of mustEdges) {
            if (!dsu.union(u, v)) return false;
            edgesUsedCount++;
        }

        for (const [u, v] of noUpgrade) {
            if (dsu.union(u, v)) {
                edgesUsedCount++;
            }
        }

        for (const [u, v] of canUpgrade) {
            if (upgradesUsed < k && dsu.union(u, v)) {
                upgradesUsed++;
                edgesUsedCount++;
            }
        }

        return dsu.components === 1 && edgesUsedCount === n - 1;
    };

    let low = 1, high = 200000;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
};
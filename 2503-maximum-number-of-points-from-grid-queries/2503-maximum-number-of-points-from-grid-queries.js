class UnionFind {
    constructor(size) {
        this.parent = Array(size).fill(0).map((_, i) => i);
        this.size = Array(size).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x)
            this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX === rootY) return;
        this.parent[rootX] = rootY;
        this.size[rootY] += this.size[rootX];
    }

    getSize(x) {
        return this.size[this.find(x)];
    }
}

var maxPoints = function(grid, queries) {
    const m = grid.length, n = grid[0].length;
    const positions = [];

    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            positions.push([grid[i][j], i, j]);

    positions.sort((a, b) => a[0] - b[0]);

    const queriesWithIndex = queries.map((val, idx) => [val, idx]);
    queriesWithIndex.sort((a, b) => a[0] - b[0]);

    const uf = new UnionFind(m * n);
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    const result = Array(queries.length).fill(0);
    let idx = 0;

    for (const [val, qIdx] of queriesWithIndex) {
        while (idx < positions.length && positions[idx][0] < val) {
            const [v, i, j] = positions[idx++];
            visited[i][j] = true;
            const curId = i * n + j;

            for (const [dx, dy] of dirs) {
                const ni = i + dx, nj = j + dy;
                if (ni < 0 || nj < 0 || ni >= m || nj >= n) continue;
                if (visited[ni][nj]) {
                    const neighborId = ni * n + nj;
                    uf.union(curId, neighborId);
                }
            }
        }

        if (visited[0][0])
            result[qIdx] = uf.getSize(0);
    }

    return result;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const adj = Array.from({ length: n }, () => []);
    
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    let count = 0;

    const dfs = (node, parent) => {
        let sum = values[node];

        for (const neighbor of adj[node]) {
            if (neighbor !== parent) {
                sum += dfs(neighbor, node);
            }
        }

        if (sum % k === 0) {
            count++;
            return 0;
        }

        return sum;
    };

    dfs(0, -1);

    return count;
};
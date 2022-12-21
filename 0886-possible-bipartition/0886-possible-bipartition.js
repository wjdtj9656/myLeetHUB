/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const graph = [...Array(n+1)].map(() => []);
    const visited = Array(n+1).fill(false);
    const color = Array(n+1).fill(0);

    for(let [u, v] of dislikes) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    for(let i = 1; i <= n; i++) {
        if(!colorNodes(i)) return false;
    }
    return true;

    function colorNodes(node) {
        if(visited[node]) return true;
        const set = new Set([1,2]);
        
        for(let child of graph[node]){
            if(color[child] === 1) set.delete(1);
            if(color[child] === 2) set.delete(2);
        }
        color[node] = Math.min(...set);
        visited[node] = true;
        if(set.size === 0) return false;
        for(let child of graph[node]){
            if(!colorNodes(child)) return false;
        }
        return true;
    }
};
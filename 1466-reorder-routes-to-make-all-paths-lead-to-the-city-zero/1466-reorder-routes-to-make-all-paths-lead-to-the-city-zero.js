/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = [];
    const set = new Set();
    let result = 0;
    for(let i=0; i<n; i++){
        graph[i] = [];
    }
    const dfs = (parent, node)=>{
        if(set.has(`${parent}-${node}`)) result++;
        for(let cur of graph[node]){
            if(cur === parent) continue;
            dfs(node, cur);
        }
    }
    for(let [u,v] of connections){
        graph[u].push(v);
        graph[v].push(u);
        set.add(`${u}-${v}`);
    }
    dfs(-1,0);
    return result;
}
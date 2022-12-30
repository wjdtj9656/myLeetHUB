/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const result = [];
    const len = graph.length-1;
    const dfs = (start,arr) =>{
        if(arr[arr.length-1] === len ){
            result.push(arr);
            return;
        }
        for(let i=0; i<graph[start].length; i++){
            dfs(graph[start][i],[...arr,graph[start][i]]);
        }
    }
    
    dfs(0,[0]);
    return result;
};
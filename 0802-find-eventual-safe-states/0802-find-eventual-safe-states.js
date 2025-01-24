/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
  const n = graph.length;
  const color = new Array(n).fill(0); 

  function dfs(node) {
    if (color[node] !== 0) {
      return color[node] === 2;
    }
    color[node] = 1;
    for (let next of graph[node]) {
      if (color[next] === 2) continue;
      if (color[next] === 1 || !dfs(next)) {
        return false;
      }
    }
    color[node] = 2;
    return true;
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (dfs(i)) {
      result.push(i);
    }
  }

  return result;
}
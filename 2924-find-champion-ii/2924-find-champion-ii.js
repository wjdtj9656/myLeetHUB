/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
  const ind = {};
  for (const [u, v] of edges) {
    ind[v] = ind[v] || 0;
    ind[v]++;
  }

  let ans = []
  for (let u = 0; u < n; u++) {
    if (ind[u] === undefined) {
      ans.push(u)
    }
  }
  return (ans.length === 1) ? ans[0] : -1    
};
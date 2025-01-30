function magnificentSets(n, edges) {
  const adjacencyList = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adjacencyList[u - 1].push(v - 1);
    adjacencyList[v - 1].push(u - 1);
  }

  const globalVisited = Array(n).fill(false);

  function bfs(startNode) {
    const distance = Array(n).fill(-1);
    distance[startNode] = 0;
    const queue = [startNode];
    const componentNodes = [startNode];
    globalVisited[startNode] = true;

    while (queue.length) {
      const current = queue.shift();
      for (const neighbor of adjacencyList[current]) {
        if (distance[neighbor] === -1) {
          distance[neighbor] = distance[current] + 1;
          queue.push(neighbor);
          componentNodes.push(neighbor);
          globalVisited[neighbor] = true;
        } else if (distance[neighbor] === distance[current]) {
          return -1; // Not bipartite
        }
      }
    }

    return Math.max(...componentNodes.map(node => getMaxLayerCount(node)));
  }

  function getMaxLayerCount(startNode) {
    const distance = Array(n).fill(-1);
    distance[startNode] = 0;
    const queue = [startNode];
    let maxLayer = 1;

    while (queue.length) {
      const current = queue.shift();
      for (const neighbor of adjacencyList[current]) {
        if (distance[neighbor] === -1) {
          distance[neighbor] = distance[current] + 1;
          maxLayer = Math.max(maxLayer, distance[neighbor] + 1);
          queue.push(neighbor);
        } else if (Math.abs(distance[neighbor] - distance[current]) !== 1) {
          return -1; // Invalid layering
        }
      }
    }

    return maxLayer;
  }

  let totalMaxGroups = 0;
  for (let i = 0; i < n; i++) {
    if (!globalVisited[i]) {
      const result = bfs(i);
      if (result === -1) return -1;
      totalMaxGroups += result;
    }
  }
  
  return totalMaxGroups;
}
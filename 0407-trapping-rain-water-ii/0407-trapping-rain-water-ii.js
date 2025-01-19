function trapRainWater(heightMap) {
  if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0) {
    return 0;
  }

  const m = heightMap.length;
  const n = heightMap[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  const minHeap = [];

  function heapPush(item) {
    minHeap.push(item);
    let curIndex = minHeap.length - 1;

    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);

      if (minHeap[curIndex][0] < minHeap[parentIndex][0]) {
        [minHeap[curIndex], minHeap[parentIndex]] =
          [minHeap[parentIndex], minHeap[curIndex]];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  function heapPop() {
    if (minHeap.length === 0) return null;

    const top = minHeap[0];
    const end = minHeap.pop();

    if (minHeap.length > 0) {
      minHeap[0] = end;

      let curIndex = 0;
      while (true) {
        let leftIndex = 2 * curIndex + 1;
        let rightIndex = 2 * curIndex + 2;
        let smallestIndex = curIndex;

        if (
          leftIndex < minHeap.length &&
          minHeap[leftIndex][0] < minHeap[smallestIndex][0]
        ) {
          smallestIndex = leftIndex;
        }
        if (
          rightIndex < minHeap.length &&
          minHeap[rightIndex][0] < minHeap[smallestIndex][0]
        ) {
          smallestIndex = rightIndex;
        }
        if (smallestIndex === curIndex) break;

        [minHeap[curIndex], minHeap[smallestIndex]] =
          [minHeap[smallestIndex], minHeap[curIndex]];
        curIndex = smallestIndex;
      }
    }

    return top;
  }

  for (let i = 0; i < m; i++) {
    heapPush([heightMap[i][0], i, 0]);
    visited[i][0] = true;

    heapPush([heightMap[i][n - 1], i, n - 1]);
    visited[i][n - 1] = true;
  }

  for (let j = 0; j < n; j++) {
    heapPush([heightMap[0][j], 0, j]);
    visited[0][j] = true;

    heapPush([heightMap[m - 1][j], m - 1, j]);
    visited[m - 1][j] = true;
  }

  let totalWater = 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (minHeap.length > 0) {
    const [curHeight, r, c] = heapPop();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) continue;

      visited[nr][nc] = true;

      if (heightMap[nr][nc] < curHeight) {
        totalWater += curHeight - heightMap[nr][nc];
        heapPush([curHeight, nr, nc]);
      } else {
        heapPush([heightMap[nr][nc], nr, nc]);
      }
    }
  }

  return totalWater;
}

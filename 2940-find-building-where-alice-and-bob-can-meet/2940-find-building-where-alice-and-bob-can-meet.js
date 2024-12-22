function leftmostBuildingQueries(heights, queries) {
  const monoStack = [];
  const result = new Array(queries.length).fill(-1);
  const newQueries = Array.from({ length: heights.length }, () => []);

  for (let i = 0; i < queries.length; i++) {
    let [a, b] = queries[i];
    if (a > b) [a, b] = [b, a];
    if (heights[b] > heights[a] || a === b) {
      result[i] = b;
    } else {
      newQueries[b].push([heights[a], i]);
    }
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    const size = monoStack.length;
    for (let [h, idx] of newQueries[i]) {
      const pos = search(h, monoStack);
      if (pos >= 0 && pos < size) {
        result[idx] = monoStack[pos][1];
      }
    }
    while (monoStack.length && monoStack[monoStack.length - 1][0] <= heights[i]) {
      monoStack.pop();
    }
    monoStack.push([heights[i], i]);
  }

  return result;
}

function search(height, monoStack) {
  let left = 0;
  let right = monoStack.length - 1;
  let ans = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (monoStack[mid][0] > height) {
      ans = Math.max(ans, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

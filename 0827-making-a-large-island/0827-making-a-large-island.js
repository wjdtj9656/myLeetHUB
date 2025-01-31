/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
  const n = grid.length;

  let index = 2;  
  const areaMap = { 0: 0, 1: 0 }; 
  
  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];
  
  function dfs(r, c, idx) {
    const stack = [[r, c]];
    grid[r][c] = idx;  
    let area = 0;

    while (stack.length > 0) {
      const [x, y] = stack.pop();
      area++;
      
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 1) {
          grid[nx][ny] = idx;
          stack.push([nx, ny]);
        }
      }
    }

    return area;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(i, j, index);
        areaMap[index] = area;
        index++;
      }
    }
  }

  let maxArea = 0;
  for (const key in areaMap) {
    maxArea = Math.max(maxArea, areaMap[key]);
  }
  if (maxArea === n * n) return maxArea;

  let result = maxArea;  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const seen = new Set();
        let newArea = 1;  
        for (const [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] !== 0) {
            const idx = grid[nx][ny];
            if (!seen.has(idx)) {
              seen.add(idx);
              newArea += areaMap[idx]; 
            }
          }
        }
        result = Math.max(result, newArea);
      }
    }
  }

  return result;
}


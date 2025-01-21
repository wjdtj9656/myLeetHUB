function gridGame(grid) {
  const n = grid[0].length;
  
  const topPrefix = new Array(n).fill(0);
  const bottomPrefix = new Array(n).fill(0);
  
  topPrefix[0] = grid[0][0];
  bottomPrefix[0] = grid[1][0];
  for (let i = 1; i < n; i++) {
    topPrefix[i] = topPrefix[i - 1] + grid[0][i];
    bottomPrefix[i] = bottomPrefix[i - 1] + grid[1][i];
  }
  
  let answer = Infinity;
  
  for (let i = 0; i < n; i++) {
    const scoreTop = topPrefix[n - 1] - topPrefix[i];
    const scoreBottom = i === 0 ? 0 : bottomPrefix[i - 1];
    
    const secondRobotScore = Math.max(scoreTop, scoreBottom);
    
    answer = Math.min(answer, secondRobotScore);
  }
  
  return answer;
}
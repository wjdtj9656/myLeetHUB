/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function(grid) {
  const n = grid.length, m = grid[0].length;
  const dirs = [[1,1],[1,-1],[-1,-1],[-1,1]];
  const cw = [1,2,3,0];
  const make = ()=>Array.from({length:n},()=>Array(m).fill(0));
  const len1 = [make(),make(),make(),make()];
  const len2 = [make(),make(),make(),make()];
  const len0 = [make(),make(),make(),make()];
  const nextExp = s => s===1?2:2;
  const nextOf = s => s===1?2:(s===2?0:2);
  for(let d=0; d<4; d++){
    const di = dirs[d][0], dj = dirs[d][1];
    const iStart = di===1? n-1: 0, iEnd = di===1? -1: n, iStep = di===1? -1: 1;
    const jStart = dj===1? m-1: 0, jEnd = dj===1? -1: m, jStep = dj===1? -1: 1;
    for(let i=iStart;i!==iEnd;i+=iStep){
      for(let j=jStart;j!==jEnd;j+=jStep){
        const ni = i+di, nj = j+dj;
        let n1=0,n2=0,n0=0;
        if(ni>=0 && ni<n && nj>=0 && nj<m){
          n1 = len1[d][ni][nj];
          n2 = len2[d][ni][nj];
          n0 = len0[d][ni][nj];
        }
        const g = grid[i][j];
        if(g===1) len1[d][i][j] = 1 + (ni>=0&&ni<n&&nj>=0&&nj<m? (n2):0);
        if(g===2) len2[d][i][j] = 1 + (ni>=0&&ni<n&&nj>=0&&nj<m? (n0):0);
        if(g===0) len0[d][i][j] = 1 + (ni>=0&&ni<n&&nj>=0&&nj<m? (n2):0);
      }
    }
  }
  const expectAtIndex = idx => {
    if(idx===0) return 1;
    return idx%2===1?2:0;
  };
  let ans = 0;
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(grid[i][j]!==1) continue;
      for(let d=0; d<4; d++){
        const di = dirs[d][0], dj = dirs[d][1];
        const L = len1[d][i][j];
        if(L>ans) ans = L;
        for(let k=1;k<=L;k++){
          const ti = i + (k-1)*di;
          const tj = j + (k-1)*dj;
          const turnDir = cw[d];
          const u_i = ti + dirs[turnDir][0];
          const u_j = tj + dirs[turnDir][1];
          const expTurn = expectAtIndex(k-1);
          const nextExpected = nextOf(expTurn);
          let secondLen = 0;
          if(u_i>=0 && u_i<n && u_j>=0 && u_j<m){
            if(nextExpected===1) secondLen = len1[turnDir][u_i][u_j];
            else if(nextExpected===2) secondLen = len2[turnDir][u_i][u_j];
            else secondLen = len0[turnDir][u_i][u_j];
          }
          const total = k + secondLen;
          if(total>ans) ans = total;
        }
      }
    }
  }
  return ans;
};

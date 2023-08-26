/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 let dr = [-1,-1,-1,0,0,1,1,1];
 let dc = [-1,0,1,-1,1,-1,0,1];
 let m = 0;
 let n = 0;
var gameOfLife = function(board) {
    m = board.length;
    n = board[0].length;
    const result = new Array(m).fill(0).map(v=>new Array(n).fill(0));
    
    for(let r=0; r<m; r++){
        for(let c=0; c<n; c++){
            result[r][c] = board[r][c];
        }
    }
    for(let r=0; r<m; r++){
      for(let c=0; c<n; c++){
        interact(result, board, r, c);
      }
    }
    for(let r=0; r<m; r++){
      for(let c=0; c<n; c++){
          board[r][c] = result[r][c];
      }
    }
};

const interact = (result, board, r, c) =>{
  let cnt = 0;
  for(let i=0; i<8; i++){
    let nr = r + dr[i];
    let nc = c + dc[i];
    if(nr < 0 || nc < 0 || nr>=m || nc>=n) continue;
    if(board[nr][nc] == 1) cnt++;
  }
  if(board[r][c] === 0){
    if(cnt === 3){
      result[r][c] = 1;
    }
  }
  else if(board[r][c] === 1){
    if(cnt < 2) result[r][c] = 0;
    if(cnt > 3) result[r][c] = 0;
  }
}
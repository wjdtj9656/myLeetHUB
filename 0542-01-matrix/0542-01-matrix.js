/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    const q = [];
    const bfs = () =>{
      while(q.length){
        let pos = q.shift();
        if(mat[pos[0]][pos[1]] > pos[2]){
          mat[pos[0]][pos[1]] = pos[2];
        }
        for(let i=0; i<4; i++){
          let nx = pos[0] + dx[i];
          let ny = pos[1] + dy[i];
          if(nx<0 || ny<0 || nx>=m || ny>=n) continue;
          if(mat[nx][ny] == 10e9){
            q.push([nx,ny,pos[2]+1]);
          }
        }
      }
    }
    for(let i=0; i<m; i++){
      for(let j=0; j<n; j++){
        if(mat[i][j] !== 0) mat[i][j] = 10e9;
      }
    }

    for(let i=0; i<m; i++){
      for(let j=0; j<n; j++){
        if(mat[i][j] == 0){
          q.push([i,j,0]);
        }
      }
    }
    bfs();
    return mat;
};
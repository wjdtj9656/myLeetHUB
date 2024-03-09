/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
   const m = board.length;
   const n = board[0].length;
   const dx = [-1,0,1,0];
   const dy = [0,-1,0,1];
   let visit = new Array(m).fill(false).map(()=>new Array(n).fill(false));
   const dfs = (x,y,index) =>{
        if(board[x][y] != word[index]) return false;
        if(index == word.length-1) return true;
        
        visit[x][y] = true;
        for(let i=0; i<4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx < 0 || ny < 0 || nx>=m || ny>=n || visit[nx][ny]) continue;
            if(dfs(nx,ny, index+1)){
                return true;
            };
        }
        visit[x][y] = false;
        return false;
   }

   for(let i=0; i<m; i++){
       for(let j=0; j<n; j++){
           visit = new Array(m).fill(false).map(()=>new Array(n).fill(false));
           if(dfs(i,j,0)){
               return true;
           }
       }
   }
   return false;
};
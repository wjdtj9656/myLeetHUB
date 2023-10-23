/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    const m = board.length;
    const n = board[0].length;
    let cnt = 0;
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    const bfs = (x,y) =>{
        const q = [[x,y]];
        while(q.length) {
            let [nx,ny] = q.shift();
            board[nx][ny] = ".";
            for(let i=0; i<4; i++){
                let nnx = nx + dx[i];
                let nny = ny + dy[i];
                if(nnx<0 || nny<0 || nnx>=m || nny>=n) continue;
                if(board[nnx][nny] === "X") q.push([nnx,nny]);
            }
        }
    }
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j] == 'X') {
                bfs(i,j);
                cnt++;
            }
        }
    }
    return cnt;
};
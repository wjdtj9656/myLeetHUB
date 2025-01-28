/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let cnt = 0;
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    const visit = new Array(m).fill(false).map(()=> new Array(n).fill(false));
    const bfs = (x,y) =>{
        const q = [[x,y,grid[x][y]]];
        visit[x][y] = true;
        let sum = grid[x][y];
        while(q.length){
            const [cx,cy,cValue] = q.pop();
            for(let i=0; i<4; i++){
                let nx = cx + dx[i];
                let ny = cy + dy[i];
                if(nx < 0 || nx >= m || ny<0 || ny>=n || visit[nx][ny] || grid[nx][ny] == 0) continue;
                visit[nx][ny] = true;
                sum += grid[nx][ny];
                q.push([nx,ny,cValue+grid[nx][ny]]);
            }
        }
        cnt = Math.max(sum,cnt);
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 0 ) continue;
            bfs(i,j);
        }
    }
    return cnt;
};

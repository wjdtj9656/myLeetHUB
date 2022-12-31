/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let dx = [-1,1,0,0];
    let dy = [0,0,-1,1];
    let min = 10e9;
    let result = 0;
    let cnt = 0;
    let start = [];
    const m = grid.length;
    const n = grid[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 0) cnt++;
            if(grid[i][j] === 1) start=[i,j];
        }
    }
    const visit = new Set();
    visit.add(`${start[0]}${start[1]}`)
    const dfs = (x,y,len) =>{
        if(grid[x][y] === 2 ){
            if(len === cnt+1) result++;
            return;
        }
        for(let i=0; i<4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx<0 || ny <0 || nx>=m || ny>=n) continue;
            if(grid[nx][ny] === -1) continue;
            if(visit.has(`${nx}${ny}`)) continue;
            visit.add(`${nx}${ny}`);
            dfs(nx, ny, len+1);
            visit.delete(`${nx}${ny}`);
        }
    }
    dfs(start[0],start[1],0);
    return result;
};
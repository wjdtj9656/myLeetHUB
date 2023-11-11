/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    const m = grid.length;
    const n = grid[0].length;
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];   
    let result = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1){
                const q =[[i,j]];
                let cnt = 0;
                grid[i][j] = 0;
                while(q.length){
                    let [sx,sy] = q.shift();
                    cnt++;
                    for(let i=0; i<4; i++){
                        let nx = sx + dx[i];
                        let ny = sy + dy[i];
                        if(nx < 0 || ny < 0 || nx>=m || ny>=n) continue;
                        if(grid[nx][ny] == 1){
                            q.push([nx,ny]);
                            grid[nx][ny] = 0;
                        }
                    }
                }
                result = Math.max(cnt, result);
            }
        }
    }
    return result;
};
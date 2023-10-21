/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let dis = new Array(m).fill(0).map(v=>new Array(n).fill(0));
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    let cur = 0;
    let result = Infinity;
    const calDis = (x,y) =>{
        const q = [[x,y,0]];
        result = Infinity;
        while(q.length){
            let [nowX,nowY,cnt] = q.shift();
            for(let i=0; i<4; i++){
                let nx = nowX + dx[i];
                let ny = nowY + dy[i];
                if(nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] != cur) continue;
                q.push([nx,ny,cnt+1]);
                dis[nx][ny] += cnt+1; 
                result = Math.min(result, dis[nx][ny]);
                grid[nx][ny]--;
            }
        }
        cur--;
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1){
                calDis(i,j);
            }
        }
    }
    return result == Infinity ? -1:result;
};
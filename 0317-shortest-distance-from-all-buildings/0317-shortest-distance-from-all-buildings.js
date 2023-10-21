/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let dis = new Array(m).fill(Infinity).map(v=>new Array(n).fill(Infinity));
    const result = new Array(m).fill(-1).map(v=>new Array(n).fill(-1));
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    const calDis = (x,y) =>{
        const q = [[x,y,0]];
        const visit = new Set();
        visit.add(`${x}-${y}`);
        while(q.length){
            let [nowX,nowY,cnt] = q.shift();
            dis[nowX][nowY] = cnt;
            for(let i=0; i<4; i++){
                let nx = nowX + dx[i];
                let ny = nowY + dy[i];
                if(nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] == 2 || visit.has(`${nx}-${ny}`) || grid[nx][ny] == 1) continue;
                visit.add(`${nx}-${ny}`);
                q.push([nx,ny,cnt+1]);
            }
        }
        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                result[i][j] += dis[i][j];
            }
        }
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1){
                calDis(i,j);
                dis = new Array(m).fill(Infinity).map(v=>new Array(n).fill(Infinity));
            }
        }
    }
    let res = Infinity;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 0 && result[i][j] != -1){
                res = Math.min(res, result[i][j])
            }
        }
    }
    console.log(result);
    return res == Infinity? -1:res+1;
};
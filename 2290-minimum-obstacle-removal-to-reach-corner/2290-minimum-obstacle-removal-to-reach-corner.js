/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    const q =[];
    let head = 0;
    let tail = 0;
    q[tail++] = [0,0];
    const dist = new Array(m).fill(Infinity).map(()=>new Array(n).fill(Infinity));
    dist[0][0] = 0;
    while(head < tail){
        const [x,y] = q[head++];
        if(x==m-1 && y==n-1){
            return dist[x][y];
        }
        for(let i=0; i<4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx>=0 && ny>=0 && nx<m && ny<n){
                const cost = dist[x][y] + grid[nx][ny];
                if(cost < dist[nx][ny]){
                    dist[nx][ny] = cost;
                    if(grid[nx][ny] == 0){
                        q[--head] = [nx,ny];
                    }
                    else{
                        q[tail++] = [nx,ny];
                    }
                }
            }
        }
    }
    return -1;
};
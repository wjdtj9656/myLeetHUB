/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const m = land.length
    const n = land[0].length;
    const visit = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    const answer = [];
    const search = (x,y) =>{
        const q = [[x,y]];
        let max = -1;
        let gx = x;
        let gy = y;
        while(q.length){
            const [cx,cy] = q.shift();
            for(let i=0; i<4; i++){
                let nx = cx + dx[i];
                let ny = cy + dy[i];
                if(nx < 0 || ny < 0 || nx>=m || ny>=n || land[nx][ny] == 0 || visit[nx][ny] !== 0) continue;
                visit[nx][ny] = 1;
                q.push([nx,ny]);
                if(max <= nx+ny){
                    gx = nx;
                    gy = ny;
                    max = nx+ny;
                }
            }
        }
        return [gx,gy];
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(land[i][j] == 1 && visit[i][j] == 0){
                const [x,y] = search(i,j);
                if(x != -1 && y != -1){
                    answer.push([i,j,x,y]);
                }
            }
        }
    }
    return answer;
};
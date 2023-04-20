/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const visit = new Set();
    let m = matrix.length;
    let n = matrix[0].length;
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    const all = m*n;
    const result = [];
    const search = () =>{
        const q = [[0,0,0]];
        let cnt = 0;
        while(q.length){
            let [x,y,dir] = q.shift();
            visit.add(`${x}-${y}`);
            result.push(matrix[x][y]);
            cnt++;
            if(cnt === all) return;
            let nx = x + dx[dir];
            let ny = y + dy[dir];
            if(visit.has(`${nx}-${ny}`) || nx<0 || ny<0 || nx>=m || ny>=n){
                dir = dir >= 3? 0:dir+1;
                nx = x + dx[dir];
                ny = y + dy[dir];
                q.push([nx,ny,dir]);
            }
            else{
                q.push([nx,ny,dir]);
            }
        }
    }
    search();
    return result;
};
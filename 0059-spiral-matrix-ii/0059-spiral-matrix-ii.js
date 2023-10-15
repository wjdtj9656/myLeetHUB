/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const set = new Set();
    let max = n*n;
    let cnt = 0;
    const arr = new Array(n).fill(0).map(v=>new Array(n).fill(0));
    console.log(arr);
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    const failCheck = (x,y) =>{
        if(set.has(`${x}-${y}`)) return false;
        if(x < 0 || y < 0 || x>=n || y>=n) return false;
        return true;
    }
    let nx = 0, ny = -1, nDir = 0;
    while(true){
        if(failCheck(nx+dx[nDir], ny+dy[nDir])){
            arr[nx][ny] = cnt;
            cnt+=1;
            set.add(`${nx}-${ny}`);
            nx +=dx[nDir];
            ny +=dy[nDir];
        }
        else {
            nDir++;
            if(nDir > 3) nDir = 0;
        }
        if(cnt === max) {
            arr[nx][ny] = cnt;
            break;
        }
    }
    return arr
};
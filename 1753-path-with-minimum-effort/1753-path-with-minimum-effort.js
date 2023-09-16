/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const visit = new Set();
    const row = heights.length;
    const col = heights[0].length;
    let result = Infinity;
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    
    const search = (x,y,value) =>{
        if(x == row-1 && y==col-1){
            return true;
        }
            visit.add(`${x}-${y}`);
        for(let i=0; i<4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx < 0 || ny < 0 || nx>=row || ny>=col|| Math.abs(heights[x][y] - heights[nx][ny]) > value || visit.has(`${nx}-${ny}`)) continue;
            const res = search(nx,ny,value);
            if(res) return true;
        }
        return false;
    }
    let left = 0;
    let right = Math.max(...heights.flat());
    while(left < right){
        let mid = (left + right) >> 1;
        visit.clear();
        if(!search(0,0,mid)){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return left;
};
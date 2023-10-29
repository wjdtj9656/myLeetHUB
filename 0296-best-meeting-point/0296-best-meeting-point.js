/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dis = new Array(m).fill(0).map(v=>new Array(n).fill(0));

    let x = [];
    let y  = [];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1){
                x.push(i);
                y.push(j);
            }
        }
    }
    x.sort((a,b)=>a-b);
    y.sort((a,b)=>a-b);
    let mid = Math.floor(x.length/2);
    let res = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1){
                res += Math.abs(x[mid] - i) + Math.abs(y[mid] - j);
            }
        }
    }
    return res;
};
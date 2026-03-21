/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    let top = x;
    let bottom = x + k-1;
    while(top < bottom){
        for(let i=y; i<y+k; i++){
            [grid[top][i],grid[bottom][i]] = [grid[bottom][i],grid[top][i]];
        }
        top++;
        bottom--;
    }
    return grid;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const aLand = [];
    const bLand = [];
    for(let i=0; i < grid.length; i++){
        for(let j=0; j < grid[0].length; j++){
            if(grid[i][j] == 1){
                if(!aLand.length){
                    dfs(grid, i, j, aLand);
                }
                else if(!bLand.length){
                    dfs(grid, i, j, bLand);
                }
            }
        }
    }
    return calDis(aLand,bLand);
};
const dfs = (grid, x, y, result) =>{
    if(x < 0 || y  < 0 || x >=grid.length || y>=grid.length || grid[x][y] != 1) return;

    result.push([x,y]);
    grid[x][y] = 0;
    dfs(grid,x+1,y,result);
    dfs(grid,x-1,y,result);
    dfs(grid,x,y+1,result);
    dfs(grid,x,y-1,result);
}

const calDis = (result1, result2) =>{
    let min = Infinity;
    for(let i=0; i<result1.length; i++){
        for(let j=0; j<result2.length; j++){
            min = Math.min(min, Math.abs(result1[i][0] - result2[j][0]) + Math.abs(result1[i][1] - result2[j][1]) -1);
        }
    }
    return min;
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) return 0;

    let m = grid.length;
    let n = grid[0].length;
    let rowCnt = 0;
    let colCnt = new Array(n).fill(0);
    let result = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(j==0 || grid[i]?.[j-1] == "W"){
            rowCnt = 0;
                for(let k=j; k<n && grid[i][k] != "W"; k++){
                    if(grid[i][k] == "E")rowCnt++;
                }
            }
            if(i==0 || grid[i-1][j] == "W"){
                colCnt[j] = 0;
                for(let k=i; k<m && grid[k][j] != "W"; k++){
                    if(grid[k][j] == "E") colCnt[j]++;
                }
            }
            if(grid[i][j] == "0"){
                result = Math.max(result, colCnt[j]+rowCnt);
            }
        }
    }

    return result;
};

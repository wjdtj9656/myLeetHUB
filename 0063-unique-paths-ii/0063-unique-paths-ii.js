/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const map = Array.from(Array(m),()=>new Array(n).fill(0));
    for(let i=0; i<n; i++){
        if(obstacleGrid[0][i] == 1) break;
        map[0][i] = 1;
    }
    for(let i=0; i<m; i++){
        if(obstacleGrid[i][0] == 1) break;
        map[i][0] = 1;
    }
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            if(obstacleGrid[i][j] === 1) map[i][j] = 0;
            else map[i][j] = map[i-1][j] + map[i][j-1];
        }
    }
    return map[m-1][n-1];
};
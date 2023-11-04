/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let result = 0;
    let cnt = 0;
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    const search = (x,y,d) =>{
        if(x < 0 || y < 0 || x>=m || y>=n) return;
        if(grid[x][y] == "W") return;
        if(grid[x][y] == "E") cnt++;
        search(x + dx[d], y+dy[d], d);
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            cnt = 0;
            if(grid[i][j] == "0"){
                search(i,j,0);
                search(i,j,1);
                search(i,j,2);
                search(i,j,3);
            }
        result = Math.max(result, cnt);
        }
    }
    return result;
};
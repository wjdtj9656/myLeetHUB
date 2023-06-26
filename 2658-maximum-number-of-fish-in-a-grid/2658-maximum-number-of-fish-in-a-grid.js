/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let dx = [-1,0,1,0];
    let dy = [0,-1,0,1];

    const dfs = (i,j) =>{
        if(grid[i][j] == 0) return 0;
        let sum = grid[i][j];
        grid[i][j] = 0;
        for(let a=0; a<4; a++){
            let nx = i + dx[a];
            let ny = j + dy[a];
            if(nx<0 || ny<0 || nx>=n || ny>=m) continue;
            sum += dfs(nx,ny);
        }
        return sum;
    }
    let ans = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            ans = Math.max(ans, dfs(i,j));
        }
    }
    return ans;
    
};
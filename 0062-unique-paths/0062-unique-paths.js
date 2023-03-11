/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let answer = 0;
    // const dfs = (x,y) =>{
    //     if(x<0 || y<0 || x>=m || y>=n) return;
    //     if(x == m-1 && y == n-1){
    //         answer++;
    //         return;
    //     }
    //     dfs(x+1,y);
    //     dfs(x,y+1);
    // }
    // dfs(0,0);
    const map = Array.from(Array(m),()=>new Array(n));
    for(let i=0; i<n; i++){
        map[0][i] = 1;
    }
    for(let i=0; i<m; i++){
        map[i][0] = 1;
    }
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            map[i][j] = map[i-1][j] + map[i][j-1];
        }
    }
    return map[m-1][n-1];
};
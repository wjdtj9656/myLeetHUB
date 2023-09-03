/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const map = new Array(m).fill(1).map(v=>new Array(n).fill(1));

    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            map[i][j] = map[i-1][j] + map[i][j-1];
        }
    }
    return map[m-1][n-1];
};
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var m = dungeon.length;
    var n = dungeon[0].length;
    
    var dp = [];
    for (var r=0; r<m+1; r++) {
        dp[r] = [];
        for (var c=0;c<n+1;c++) {
            dp[r][c] = Infinity;
        }
    }
    dp[m-1][n] = dp[m][n-1] = 1;
    
    for (var r=m-1;r>=0;r--) {
        for (var c=n-1;c>=0;c--) {
            dp[r][c] = Math.max(1, Math.min(dp[r+1][c], dp[r][c+1])-dungeon[r][c]);
        }
    }
    return dp[0][0];
};
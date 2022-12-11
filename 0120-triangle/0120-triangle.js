/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let len = triangle.length;
    const dp = new Array(len).fill(0).map(()=>[]);
    for(let i=0; i<triangle[len-1].length; i++){
        dp[len-1].push(triangle[len-1][i]);
    }
    for(let i=len-2; i>=0; i--){
        for(let j=0; j<triangle[i].length; j++){
            dp[i][j] = Math.min(triangle[i][j] + dp[i+1][j],triangle[i][j] + dp[i+1][j+1]);
        }
    }
    return dp[0][0];
};
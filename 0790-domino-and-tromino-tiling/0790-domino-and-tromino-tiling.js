/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const modulo = 1e9 + 7;
    const dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;
    for(let i=4; i<=n; i++){
        dp[i] = (dp[i-1]*2 + dp[i-3])%modulo;
    }
    return dp[n];
};
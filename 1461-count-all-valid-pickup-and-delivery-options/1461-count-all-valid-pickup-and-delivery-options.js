/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    const MOD = 1_000_000_007;
    const dp = new Array(n+1).fill(0).map(()=>new Array(n+1).fill(0));
    for(let i=0; i<=n; i++){
        for(let j=i; j<=n; j++){
            if(i==0 && j==0){
                dp[i][j] = 1;
                continue;
            }
            if(i > 0){
                dp[i][j] += i * dp[i-1][j];
            }
            dp[i][j] %= MOD;

            if(j > i){
                dp[i][j] += (j-i) * dp[i][j-1];
            }
            dp[i][j] %= MOD;
        }
    }
    return dp[n][n];
};
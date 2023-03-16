/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const len = coins.length;
    const dp = Array.from(Array(len+1),()=>new Array(amount+1).fill(0));
    for(let i=0; i<=len; i++){
        dp[i][0] = 1;
    }
    for(let i=1; i<=len; i++){
        for(let j=1; j<=amount; j++){
            if(j - coins[i-1] >= 0) dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]];
            else dp[i][j] = dp[i-1][j];
        }
    }
    return dp[len][amount];
};
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for(let coin of coins){
        dp[coin] = 1;
    }
    for(let i=0; i<=amount; i++){
        for(let coin of coins){
            if(!dp[i-coin]) continue;
            dp[i] = Math.min(dp[i-coin]+1,dp[i]);
        }
    }
    return dp[amount] === Infinity? -1:dp[amount];
};
/**
 * @param {number[]} regular
 * @param {number[]} express
 * @param {number} expressCost
 * @return {number[]}
 */
var minimumCosts = function(regular, express, expressCost) {
    const dp = [], dpR =[], dpE = [];
    dpR[-1] = 0;
    dpE[-1] = expressCost;
    for(let i=0; i<regular.length; i++){
        let regularFee = Math.min(dpR[i-1] + regular[i], dpE[i-1] + regular[i]);
        let expressFee = Math.min(dpE[i-1] + express[i], dpR[i-1] + expressCost + express[i]);
        dpR[i] = regularFee;
        dpE[i] = expressFee;
        dp[i] = Math.min(regularFee, expressFee);
    }
    return dp;
};
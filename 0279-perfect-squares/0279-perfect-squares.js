/** 
 * @param {number} n
 * @return {number}
 */
//1 4 9 16 25 36 49 64 81
var numSquares = function(n) {
    const q = [];
    const dp = new Array(n).fill(Infinity);
    dp[0] = 0;
    for(let i=1; i<=n; i++){
        let num = Math.sqrt(i);
        if(num%1 === 0){
            q.push(i);
            dp[i] = 1;
            continue;
        }
        dp[i] = dp[i-1] + 1;
        for(let j=0; j<q.length; j++){
            let index = q[j];
            dp[i] = Math.min(dp[i], dp[i-index] + 1);
        }
    
    }
    return dp[n];
};
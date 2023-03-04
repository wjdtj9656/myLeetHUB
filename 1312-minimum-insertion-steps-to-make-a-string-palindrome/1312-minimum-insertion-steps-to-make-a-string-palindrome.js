/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const dp = Array.from(Array(s.length),()=>new Array(s.length).fill(0));
    for(let i=s.length-2; i>=0; i--){
        for(let j=i+1; j<s.length; j++){
            if(s[i] === s[j]) dp[i][j] = dp[i+1][j-1];
            else{
                dp[i][j] = Math.min(dp[i+1][j], dp[i][j-1])+1;
            }
        }
    }
    return dp[0][s.length-1];
};
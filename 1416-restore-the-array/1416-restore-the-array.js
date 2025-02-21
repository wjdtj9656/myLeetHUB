/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
    const  n = s.length;
    const dp = new Array(n+1).fill(0);
    const char = s.split("");
    const mod = 1000000007;
    dp[n] = 1;
    for(let i=n-1; i>=0; i--){
        if(char[i] === "0") continue;
        let j= i+1;
        let str = "";
        str = str + char[i];
        while(j<=n && parseInt(str) <= k){
            dp[i] += dp[j];
            dp[i] %= mod;
            if(j<n) str = str + char[j];
            j++;
        }
    }
    return parseInt(dp[0]);
};
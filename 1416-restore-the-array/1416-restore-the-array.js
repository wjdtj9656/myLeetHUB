/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
   let n = s.length;
    const dp = new Array(n+1).fill(0);
    let char = s.split("");
    dp[n] = 1;
    let mod = 1000000007;
    for(let i=n-1; i>=0; i--){
        if(char[i] === "0") continue;
        
        let j = i+1;
        let str = "";
        str = str + char[i];
        while(j<=n && parseInt(str) <= k){
            dp[i]+=dp[j];
            dp[i]%=mod;
            if(j<n){
                str = str + char[j];
            }
            j++;
        }
    }
    return parseInt(dp[0]);
};
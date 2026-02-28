/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    const mod = 1e9+7;
    let cur = 0;
    for(let i=1; i<=n; i++){
        const num = i;
        const len = num.toString(2).length;
        for(let j=0; j<len; j++){
            cur *= 2;
            cur %= mod;
        }
        cur+=i;
        cur %= mod;
    }
    return cur;
};
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let ans = 0;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            const sum = i * i + j * j;
            const c = Math.sqrt(sum);
            if(c === parseInt(c) && 1<=c && c<=n)ans++;
        }
    }
    return ans;
};
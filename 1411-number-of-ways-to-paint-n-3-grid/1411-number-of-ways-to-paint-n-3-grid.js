/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    let curA = 6;
    let curB = 6;
    const MOD = Math.pow(10,9) + 7;
    for(let i=2 ;i<= n; i++){
        let a = ((curA*3) + (curB*2))%MOD;
        let b = ((curA*2) + (curB*2))%MOD;
        curA = a;
        curB = b;
    }
    return (curA + curB)%MOD;
};
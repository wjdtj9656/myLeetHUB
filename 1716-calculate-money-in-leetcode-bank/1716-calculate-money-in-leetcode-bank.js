/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let a = n%7;
    let b = n/7>>0;
    let res = 0;
    for(let i=0; i<b; i++){
        res += (28+(7*i));
    }
    for(let i=0; i<a; i++){
        res += b+(i+1);
    }
    return res;
};
/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let res = 0;
    let one = 0;
    for(let num of s){
        if(num === "1") one++, res+=one;
        else one = 0;
    }
    return res %(10**9+7);
};
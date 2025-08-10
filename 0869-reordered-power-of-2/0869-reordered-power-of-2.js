/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const set = new Set();
    let num = 1;
    for(let i=0; i<=31; i++){
        set.add(String(num).split("").sort().join(""));
        num*=2;
    }
    return set.has(String(n).split("").sort().join(""));
};
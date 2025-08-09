/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    const set = new Set();
    let num = 1;
    for(let i=0; i<=31; i++){
        set.add(num);
        num *=3;
    }
    return set.has(n);
};

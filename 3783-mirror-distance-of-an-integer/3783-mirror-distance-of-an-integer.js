/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    return Math.abs(parseInt(String(n).split('').reverse().join('')) - n);

};
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if (n === 0) return 1;

    const binaryStr = n.toString(2);
    let complementStr = '';

    for (let char of binaryStr) {
        complementStr += (char === '0') ? '1' : '0';
    }

    return parseInt(complementStr, 2);
};
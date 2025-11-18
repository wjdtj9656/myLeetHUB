/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0;
    const n = bits.length;
    while (i < n - 1) {
        if (bits[i] === 1) i += 2;
        else i += 1;
    }
    return i === n - 1;
};

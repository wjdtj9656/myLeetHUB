/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    if (n === 1) {
        return "0";
    }

    const len = (1 << n) - 1;
    const mid = Math.ceil(len / 2);

    if (k === mid) {
        return "1";
    } else if (k < mid) {
        return findKthBit(n - 1, k);
    } else {
        const correspondingBit = findKthBit(n - 1, len - k + 1);
        return correspondingBit === "0" ? "1" : "0";
    }
};
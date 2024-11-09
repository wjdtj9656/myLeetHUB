/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let res = BigInt(x);
    let bitsLeft = BigInt(n - 1);
    let bitMask = BigInt(1);

    while (bitsLeft !== 0n) {
        if ((BigInt(x) & bitMask) === 0n) {
            res |= (bitsLeft & 1n) * bitMask;
            bitsLeft >>= 1n;
        }
        bitMask <<= 1n;
    }

    return Number(res);
};
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    if (s.length < k) return false;

    const seen = new Set();
    const needed = 1 << k;

    for (let i = 0; i <= s.length - k; i++) {
        seen.add(s.substring(i, i + k));
        if (seen.size === needed) {
            return true;
        }
    }

    return seen.size === needed;
};
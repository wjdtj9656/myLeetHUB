/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    const ways = [0, k, k*k];
    if (n < 3) return ways[n];
    let idx = 3;
    while (idx++ <= n) {
        ways[0] = ways[1], ways[1] = ways[2];
        ways[2] = (ways[0] + ways[1]) *(k-1);
    }
    return ways.pop();
};
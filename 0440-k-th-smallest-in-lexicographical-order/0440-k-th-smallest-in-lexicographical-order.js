/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let curr = 1;
    k = k - 1; 

    while (k > 0) {
        let steps = calculateSteps(curr, curr + 1, n);
        if (steps <= k) {
            curr += 1;
            k -= steps;
        } else {
            curr *= 10;
            k -= 1;
        }
    }
    return curr;
};

function calculateSteps(first, last, n) {
    let steps = 0;
    while (first <= n) {
        steps += Math.min(n + 1, last) - first;
        first *= 10;
        last *= 10;
    }
    return steps;
}
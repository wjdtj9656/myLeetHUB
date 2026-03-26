/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let maxDistance = 0;
    let lastPosition = -1;
    let currentPosition = 0;

    while (n > 0) {
        if (n & 1) {
            if (lastPosition !== -1) {
                maxDistance = Math.max(maxDistance, currentPosition - lastPosition);
            }
            lastPosition = currentPosition;
        }
        n >>= 1;
        currentPosition++;
    }

    return maxDistance;
};
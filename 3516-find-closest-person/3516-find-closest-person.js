/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const dis1 = Math.abs(x - z);
    const dis2 = Math.abs(y - z);

    if (dis1 > dis2) return 2;
    else if (dis1 < dis2) return 1;
    else return 0;
};

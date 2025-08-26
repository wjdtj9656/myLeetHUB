/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let max = 0;
    let res = 0;
    for (let [x, y] of dimensions) {
        const value = x * x + y * y;
        const area = x * y;
        
        if (value > max || (value === max && area > res)) {
            max = value;
            res = area;
        }
    }
    return res;
};

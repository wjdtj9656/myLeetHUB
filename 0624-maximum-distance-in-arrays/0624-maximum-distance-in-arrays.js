/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let result = -Infinity;
    let min = arrays[0][0];
    let max = arrays[0].pop();
    for(let i=1; i<arrays.length; i++){
        let curMin = arrays[i][0];
        let curMax = arrays[i].pop();
        
        result = Math.max(result, curMax - min);
        result = Math.max(result, max - curMin);
        
        min = Math.min(min, curMin);
        max = Math.max(max, curMax);
    }
    return result;
};
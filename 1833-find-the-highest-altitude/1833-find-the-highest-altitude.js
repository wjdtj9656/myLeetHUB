/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let now = 0;
    let result = 0;
    for(let val of gain){
        now += val;
        result = Math.max(result, now);
    }
    return result;
};
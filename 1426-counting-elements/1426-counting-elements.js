/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let uniqueNums = new Set(arr);
    let count = 0;
	
    arr.forEach(num => {
        if (uniqueNums.has(num + 1)) count++
    })
	
    return count
};
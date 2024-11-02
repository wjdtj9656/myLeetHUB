/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let distinctCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isDistinct(arr, i)) {
            distinctCount++;
            if (distinctCount === k) {
                return arr[i];
            }
        }
    }
    return "";
};

function isDistinct(arr, index) {
    return arr.filter(s => s === arr[index]).length === 1;
}
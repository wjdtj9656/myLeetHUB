/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let a = 0;
    for (let i of nums) {
        a ^= i;
    }
    return a;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const sum = nums.reduce((a,b)=>(a+b));
    return sum %k;
};
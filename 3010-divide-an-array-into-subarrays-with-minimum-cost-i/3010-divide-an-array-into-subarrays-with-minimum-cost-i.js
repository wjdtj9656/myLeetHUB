/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    const arr = nums.slice(1);

    arr.sort((a,b)=>a-b);
    let sum = 0;
    sum += nums[0];
    sum += arr[0];
    sum += arr[1];
    return sum;
};
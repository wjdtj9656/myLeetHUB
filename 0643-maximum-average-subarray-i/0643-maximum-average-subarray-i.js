/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0;
    let right = k-1;
    let max = 0;
    for(let i=left; i<=right; i++){
        max += nums[i];
    }
    let sum = max;
    max /= k;
    let index = k;
    while(index < nums.length){
        sum -= nums[index-k];
        sum += nums[index];
        index++;
        max = Math.max(max, sum/k);
    }
    return max;
};
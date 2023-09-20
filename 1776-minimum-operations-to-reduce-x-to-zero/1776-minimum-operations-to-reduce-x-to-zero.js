/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let sum = nums.reduce((a,b)=>a+b,0);
    sum -= x;
    if(sum === 0) return nums.length;
    let result = 0;
    let left = 0;
    let now = 0;
    for(let right=0; right<nums.length; right++){
        now += nums[right];
        while(left <= right && now > sum){
            now -= nums[left];
            left++;
        }
        if(now === sum){
            result = Math.max(result, right-left+1);
        }
    }
    return result ? nums.length - result : -1;
};
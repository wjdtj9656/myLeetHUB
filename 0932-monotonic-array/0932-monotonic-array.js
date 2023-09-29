/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let cnt = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] >= nums[i-1]){
            cnt++;
        }
    }
    if(cnt === nums.length-1) return true;
    cnt = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] <= nums[i-1]){
            cnt++;
        }
    }
    if(cnt === nums.length-1) return true;
    return false;
};
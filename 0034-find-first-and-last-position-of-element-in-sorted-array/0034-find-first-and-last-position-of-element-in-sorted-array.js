/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right){
        let mid = (left + right) >> 1;
        if(nums[mid] >= target){
            right = mid;
        }
        else if(nums[mid] < target){
            left = mid+1;
        }
    }
    let answer1 = left;
    left = 0;
    right = nums.length;
    while(left < right){
        let mid = (left + right) >> 1;
        if(nums[mid] > target){
            right = mid;
        }
        else if(nums[mid] <= target){
            left = mid+1;
        }
    }
    let answer2 = left;
    if(nums[answer1] !== target) return [-1,-1];
    return [answer1, answer2-1];
};
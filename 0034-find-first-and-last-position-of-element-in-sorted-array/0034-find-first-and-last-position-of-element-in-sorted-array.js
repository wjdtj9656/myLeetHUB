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
    console.log(left,right)
    if(nums[left] !== target) return [-1,-1];
    for(let i=left; i<nums.length; i++){
        if(nums[i] !== target) return[left,i-1];
    }
    return [left,nums.length-1];
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length;
  while(left < right){
    let mid = Math.floor((left+right)/2);
    if(target > nums[mid]){
        left = mid + 1;
    }else{
        right = mid;
    }
  }
  return nums[left] == target ? left : -1;
};
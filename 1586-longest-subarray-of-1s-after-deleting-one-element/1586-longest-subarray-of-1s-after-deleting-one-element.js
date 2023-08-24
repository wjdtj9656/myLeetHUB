/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {

    let zero = 0;
    let result = 0;
    const arr = [];
    for(let i=0; i<nums.length; i++){
      if(nums[i] === 0){
        zero++;
        arr.push(nums[i]);
      }
      else if(nums[i] === 1){
        arr.push(nums[i]);
      }

      if(zero === 1 || zero === 0){
        result = Math.max(result, arr.length-1);
      }
      else{
        while(zero > 1){
          if(arr[0] === 0) zero--;
          arr.shift();
        }
      }
    }
    return result;
};
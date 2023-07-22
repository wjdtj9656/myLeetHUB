/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let result = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 1){
            cnt = 0;
        }
        else cnt++;
        result = Math.max(result, cnt);
    }
    return result;
};
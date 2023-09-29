/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let curr = 1;
    let sum = 1;
    for(let i=1; i<nums.length; i++){
        if(nums[i] > nums[i-1]){
            curr++;
        }
        else curr = 1;
        sum += curr;
    }
    return sum;
};


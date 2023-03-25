/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let result = 0;
    const search = (index,sum) =>{
        if(index === nums.length){
            if(sum === target) result++;
            return;
        }
        search(index+1, sum+nums[index]);
        search(index+1, sum-nums[index]);
    }
    search(0,0);
    return result;
};
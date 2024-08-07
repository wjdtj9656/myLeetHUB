/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = []
    for(const i in nums)target.splice(index[i], 0, nums[i])
    return target    
};
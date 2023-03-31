/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const index =[];
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            index.push(i);
        }
    }
    if(index.length === 0) return [-1,-1];
    return [index[0],index[index.length-1]];
};
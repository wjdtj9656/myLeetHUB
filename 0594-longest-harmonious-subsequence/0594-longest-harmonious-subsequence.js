/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map=new Map(),len=0;
    for (let i = 0, j = 0; i < nums.length; i++) map.set(nums[i], map.get(nums[i]) + 1 || 1);
    for (const [key,value] of map) if (map.get(key - 1)) len = Math.max(len, map.get(key - 1) + value);
    return len; 
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let num = nums.length/3 >> 0;
    const result = new Set();
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        map.set(nums[i],(map.get(nums[i]) || 0)+1);
    }
    for(let [key,value] of map){
        if(value > num) result.add(key);
    }
    
    return [...result];
};
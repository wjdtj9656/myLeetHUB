/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    console.log(nums);
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.get(nums[i]) === 2){
            nums[i] = 1e9;
            continue;
        }
        map.set(nums[i], (map.get(nums[i]) || 0) +1);
    }
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1e9) return i;
    }
};
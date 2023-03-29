/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        map.set(nums[i],(map.get(nums[i]) || 0)+1);
    }
    for(let i=0; i<nums.length; i++){
        if(map.get(0)>0){
            nums[i] = 0;
            map.set(0, map.get(0)-1);
        }
        else if(map.get(1)>0){
            nums[i] = 1;
            map.set(1, map.get(1)-1);
        }
        else if(map.get(2)>0){
            nums[i] = 2;
            map.set(2, map.get(2)-1);
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const arr = [];
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] == nums[i+1]){
            nums[i] *=2;
            nums[i+1] = 0;
        }
    }
    let cnt = 0;
    for(let num of nums){
        if(num != 0){
            arr.push(num);
        }
        else{
            cnt++;
        }
    }
    for(let i=0; i<cnt; i++){
        arr.push(0);
    }
    return arr;
};
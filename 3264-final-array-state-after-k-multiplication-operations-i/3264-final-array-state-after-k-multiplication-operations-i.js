var getFinalState = function(nums, k, multiplier) {
    for(let a=0; a<k; a++){
        let min = 10e9;
        for(let i=0; i<nums.length; i++){
            min = Math.min(nums[i],min);  
        }
        let index = nums.indexOf(min);
        nums[index] = nums[index]*multiplier;
    }
    return nums;
};
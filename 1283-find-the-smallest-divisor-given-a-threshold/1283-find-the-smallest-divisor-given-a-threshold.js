/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    
    let sum = 0;
    let max = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        max = Math.max(max, nums[i]);
    }
    let left = 0;
    let right = max;
    let result = 0;
    while(left < right){
        let mid = (left + right) >> 1;
        let total = 0;
        for(let i=0; i<nums.length; i++){
            total += Math.ceil(nums[i] / mid);
        }
        if(total > threshold){
            //result = left;
            left = mid + 1;
        }
        else{
            //result = left;
            right = mid;
        }
    }
    return left;
};
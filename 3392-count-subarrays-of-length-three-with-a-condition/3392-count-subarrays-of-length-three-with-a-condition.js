/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let res = 0;
    const n = nums.length;
    for(let i=0; i+2<n; i++){
        let a = nums[i];
        let b = nums[i+1];
        let c = nums[i+2];
        if(2*(a+c) == b) res++;
    }
    return res;
};
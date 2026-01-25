/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(k==1) return 0;
    nums.sort((a,b)=>a-b);
    let max = 10e9;
    for(let i=0; i<=nums.length-k; i++){
        max = Math.min(max,nums[i+k-1]-nums[i]);
    }
    return max;
};
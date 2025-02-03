/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    const len = nums.length;
    let ans = 1;
    let a = 1;
    let b = 1;
    for(let i=1; i<len; i++){
        if(nums[i] > nums[i-1]){
            a++;
            b=1;
        }
        else if(nums[i] < nums[i-1]){
            a=1;
            b++;
        }
        else{
            a=1;
            b=1;
        }
        ans = Math.max(ans,a,b);
    }
    return ans;
};
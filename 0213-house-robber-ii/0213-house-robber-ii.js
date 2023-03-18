/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    const search = (arr) =>{
        const dp = new Array(arr.length);
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0],arr[1]);
        for(let i=2; i<arr.length; i++){
            dp[i] = Math.max(dp[i-1], dp[i-2]+arr[i]);
        }
        return dp[arr.length-1];
    }
    return Math.max(search(nums.slice(0,nums.length-1)), search(nums.slice(1)));
};
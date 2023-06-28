/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function(nums) {
    let n = nums.length;
    const arr = [...Array(n)].map(()=> Array(2).fill(0));
    const mod = 1e9 + 7;
    arr[0][0] = nums[0] ^ 1;
    arr[0][1] = nums[0];
    for(let i=1; i<n; i++){
        if(nums[i] == 0){
            arr[i][0] = (arr[i-1][0] + arr[i-1][1]) % mod;
            arr[i][1] = arr[i-1][1];
        }
        else{
            arr[i][0] = 0;
            arr[i][1] = (arr[i-1][0] + arr[i-1][1]) % mod;
        }
    }
    return arr[n-1][1];
};
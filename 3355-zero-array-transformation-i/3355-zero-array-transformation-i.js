/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const n = nums.length;
    const arr = new Array(n+1).fill(0);
    for(let i=0; i<queries.length; i++){
        arr[queries[i][0]]--;
        arr[queries[i][1]+1]++;
    }
    let val = 0;
    for(let i=0; i<n; i++){
        val += arr[i];
        if(nums[i] <= 0) continue;
        nums[i] += val;
    }
    for(let i=0; i<n; i++){
        if(nums[i] > 0) return false;
    }
    return true;
};
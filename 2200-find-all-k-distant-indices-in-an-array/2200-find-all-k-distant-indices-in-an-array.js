/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const arr = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] == key){
            arr.push(i);
        }
    }
    const ans = new Set();
    for(let i=0; i<arr.length; i++){
        ans.add(arr[i]);
        for(let j=arr[i]-k; j<=arr[i]+k; j++){
            if(j < 0 || j >= nums.length) continue;
            ans.add(j);
        }
    }
    return [...ans].sort((a,b)=>a-b)
};
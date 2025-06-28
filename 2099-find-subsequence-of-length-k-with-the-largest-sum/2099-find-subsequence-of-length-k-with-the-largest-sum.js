/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const nums2 = nums.map((v,index)=>[v,index])
    nums2.sort((a,b)=>b[0]-a[0]);
    let ans = [];
    for(let i=0; i<k; i++){
        ans.push(nums2[i]);
    }
    let res = [];
    for(let i=ans.length-1; i>=0; i--){
        res.push(nums[ans[i][1]]);
    }
    return res;
};
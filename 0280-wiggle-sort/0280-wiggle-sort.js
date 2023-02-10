/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a,b)=>a-b);
    let arr = [...nums];
    let left = 0;
    let right = nums.length-1;
    
    for(let i=0; i<nums.length; i++){
        if(i % 2 === 0) nums[i] = arr[left++];
        else nums[i] = arr[right--];
    }
};
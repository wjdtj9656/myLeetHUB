/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    const arr = [];
    const arr2 = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 == 0){
            arr.push(nums[i]);
        }
        else arr2.push(nums[i]);
    }
    const answer = [];
    for(let i=0; i<arr.length; i++){
        answer.push(arr[i]);
    }
    for(let i=0; i<arr2.length; i++){
        answer.push(arr2[i]);
    }
    return answer;
};
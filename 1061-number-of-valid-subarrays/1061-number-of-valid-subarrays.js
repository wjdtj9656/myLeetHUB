/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
    let answer = 0;
    for(let left = 0; left<nums.length; ++left){
        let cnt = 0;
        for(let right = left; right<nums.length; ++right){
            if(nums[left] > nums[right]) break;
            cnt++;
        }
        answer += cnt;
    }
    return answer;
};
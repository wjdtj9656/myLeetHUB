/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const swap=(arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
var permute = function(nums, start=0, answer=[]) {
    if(start === nums.length - 1) {
        answer.push([...nums]);
    }
    for(let i=start; i<nums.length; i++) {
        swap(nums, start, i);
        permute(nums, start+1, answer)
        swap(nums, start, i);
    }
    return answer;
};
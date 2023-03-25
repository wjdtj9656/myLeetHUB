/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const subset = (index, now) =>{
        if(index === nums.length){
            result.push(now);
            return;
        }
        subset(index+1,[...now,nums[index]]);
        subset(index+1,[...now]);
    }
    subset(0,[]);
    return result;
};
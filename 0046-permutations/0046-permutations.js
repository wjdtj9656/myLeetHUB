/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums, start=0, answer=[]) {
 
    const result = [];
    const visit = new Set();
    const permutation = (now) =>{
        if(nums.length === now.length){
            result.push(now);
            return;
        }
        for(let i=0; i<nums.length; i++){
            if(!visit.has(i)){
                visit.add(i);
                permutation([...now,nums[i]]);
                visit.delete(i);
            }
        }
    }
    permutation([],);
    return result;
};
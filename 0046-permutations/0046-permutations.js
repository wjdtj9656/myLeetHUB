/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let visit;
let result;
var permute = function(nums) {
    visit = new Set();
    result = [];
    permutation(nums,0,[]);
    return result;
};
const permutation = (nums,cnt,arr) =>{
    if(cnt === nums.length){
        result.push([...arr]);
        return;
    }
    for(let i=0; i<nums.length; i++){
        if(!visit.has(i)){
            visit.add(i);
            arr.push(nums[i]);
            permutation(nums,cnt+1,arr);
            arr.pop();
            visit.delete(i);
        }
    }
}
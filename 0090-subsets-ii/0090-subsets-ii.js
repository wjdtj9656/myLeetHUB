/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    const visit = new Set();
    const visit2 = new Set();
    nums.sort((a,b)=>a-b);
    const subset = (index,arr) =>{
        if(index === nums.length){
            if(visit.has(`${[...arr]}`)) return;
            visit.add(`${[...arr]}`);
            result.push([...arr])
            return;
        }
        subset(index+1,[...arr,nums[index]]);
        subset(index+1,[...arr]);
    }
    subset(0,[])
    return result;
};
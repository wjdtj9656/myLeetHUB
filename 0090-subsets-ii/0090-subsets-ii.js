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
            let arr = [];
            for(let i=0; i<nums.length; i++){
                if(visit.has(i)){
                    arr.push(nums[i])
                }
            }
            if(visit2.has(`${[...arr]}`)) return;
            visit2.add(`${[...arr]}`)
            result.push(arr)
            return;
        }
        visit.add(index);
        subset(index+1);
        visit.delete(index);
        subset(index+1);
    }
    subset(0,[])
    return result;
};
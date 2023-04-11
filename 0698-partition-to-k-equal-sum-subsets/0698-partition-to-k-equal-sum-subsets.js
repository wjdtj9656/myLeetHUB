/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = nums.reduce((a,b)=>{return a+b},0);
    let target = sum/k;
    if(target %1 !== 0) return false;
    const map = new Map();
    const part = (sum,index,cnt) =>{
        if(cnt === k) return true;
        if(sum > target) return false;
        let key = nums.join("");
        if(map.has(key)) return false;
        if(sum === target) return part(0,0,cnt+1);
        for(let i=index; i<nums.length; i++){
            if(nums[i] === null) continue;
            let save = nums[i];
            nums[i] = null;
            if(part(sum + save, i+1, cnt)) return true;
            nums[i] = save;
        }
        map.set(key,false);
        return false;
    }
    return part(0,0,0);
};
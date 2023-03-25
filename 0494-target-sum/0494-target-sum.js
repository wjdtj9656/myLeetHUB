/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const map = new Map();
    const search = (index,sum) =>{
        if(index === nums.length){
            if(sum === target) return 1;
            return 0;
        }
        if(map.has(`${index}-${sum}`)) return map.get(`${index}-${sum}`);
        let result = search(index+1, sum-nums[index]) + search(index+1, sum+nums[index]);
        map.set(`${index}-${sum}`,result);
        return result;
    }
    return search(0,0);
};
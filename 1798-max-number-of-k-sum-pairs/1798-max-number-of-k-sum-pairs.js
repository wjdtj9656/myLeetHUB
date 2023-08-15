/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = new Map();
    let result = 0;
    for(let val of nums){
        map.set(val, (map.get(val) || 0)+1);
    }
    for(let val of nums){
        if(map.get(val) > 0){
            let need = k-val;
            if(need < 0) continue;
            if(map.get(need) > 0){
                if(val === need && map.get(val) == 1) continue;
                map.set(val, map.get(val)-1);
                map.set(need, map.get(need)-1);
                result++;
            }
        }
    }
    return result;
};
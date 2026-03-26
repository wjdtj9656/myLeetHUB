/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const n = nums.length/2;
    const map = {};
    for(let num of nums){
        map[num] = (map[num] ||0) +1;
        if(map[num] === n){
            return num;
        }
    }
};
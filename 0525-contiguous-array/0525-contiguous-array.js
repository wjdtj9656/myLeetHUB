/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map();
    map.set(0,-1);
    let maxLen = 0, cnt = 0;
    for(let i=0; i<nums.length; i++){
        cnt += (nums[i] == 1? 1:-1);
        if(map.has(cnt)){
            maxLen = Math.max(maxLen,i-map.get(cnt));
        }
        else{
            map.set(cnt,i);
        }
    }
    return maxLen;
};
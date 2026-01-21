/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    return nums.map(num => {
        for (let i = 30; i >= 0; i--) {
            if ((num >> i) & 1) {
                let cand = num ^ (1 << i);
                if ((cand | (cand + 1)) === num) {
                    return cand;
                }
            }
        }
        return -1;
    });
};
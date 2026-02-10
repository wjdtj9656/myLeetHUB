
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let maxLen = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const evens = new Set();
        const odds = new Set();

        for (let j = i; j < n; j++) {
            if (nums[j] % 2 === 0) {
                evens.add(nums[j]);
            } else {
                odds.add(nums[j]);
            }

            if (evens.size === odds.size) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countSubarrays(nums, k) {
    let count = 0;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum * (right - left + 1) >= k) {
            sum -= nums[left];
            left++;
        }
        count += right - left + 1;
    }

    return count;
}

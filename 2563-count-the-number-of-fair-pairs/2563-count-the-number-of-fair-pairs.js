/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b); 
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let left = i + 1;
        let right = n - 1;

        // lower-bound를 찾기 위한 투 포인터
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] >= lower) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        let l = left;

        left = i + 1;
        right = n - 1;

        // upper-bound를 찾기 위한 투 포인터
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] <= upper) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        let r = right;

        if (l <= r) {
            count += (r - l + 1);
        }
    }

    return count;
};

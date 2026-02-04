/**
 * @param {number[]} nums
 * @return {number}
 */
var maxTrionicSubarray = function(nums) {
    let n = nums.length;
    let dp1 = -Infinity;
    let dp2 = -Infinity;
    let dp3 = -Infinity;
    let ans = -Infinity;

    for (let i = 1; i < n; i++) {
        let curr = nums[i];
        let prev = nums[i - 1];

        if (curr > prev) {
            let next_dp1 = Math.max(dp1, prev) + curr;
            let next_dp3 = Math.max(dp3, dp2) + curr;
            
            dp1 = next_dp1;
            dp3 = next_dp3;
            dp2 = -Infinity;
        } else if (curr < prev) {
            let next_dp2 = Math.max(dp2, dp1) + curr;
            
            dp2 = next_dp2;
            dp1 = -Infinity;
            dp3 = -Infinity;
        } else {
            dp1 = -Infinity;
            dp2 = -Infinity;
            dp3 = -Infinity;
        }

        if (dp3 > ans) {
            ans = dp3;
        }
    }

    return ans;
};
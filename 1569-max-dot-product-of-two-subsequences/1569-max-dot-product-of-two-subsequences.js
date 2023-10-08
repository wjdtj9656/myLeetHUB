/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const dp = new Array(m+1);
    for(let i=0; i<=m; i++){
        dp[i] = new Array(n+1).fill(-Infinity);
    }

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            const currProduct = nums1[i-1] * nums2[j-1];

            dp[i][j] = Math.max(currProduct, dp[i][j], dp[i-1][j], dp[i][j-1], dp[i-1][j-1]+currProduct);
        }
    }
    return dp[m][n];
};
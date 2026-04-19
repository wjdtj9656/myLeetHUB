/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let maxDist = 0;
    let i = 0;
    let j = 0;
    const n1 = nums1.length;
    const n2 = nums2.length;

    while (i < n1 && j < n2) {
        if (nums1[i] <= nums2[j]) {
            maxDist = Math.max(maxDist, j - i);
            j++;
        } else {
            i++;
            if (i > j) {
                j = i;
            }
        }
    }

    return maxDist;
};
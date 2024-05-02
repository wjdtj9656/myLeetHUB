/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function(nums1, nums2) {
    const diff = nums1.map((item,index) => item-nums2[index]);
    diff.sort((a,b)=>a-b);
    let cnt = 0;
    let left = 0;
    let right = nums1.length-1;
    while(left < right) {
        if(diff[left] + diff[right] > 0) {
            cnt += right-left;
            right--;
        }
        else{
            left++;
        }
    }
    return cnt
};
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;
        let miss = arr[mid] - mid - 1;
        if(miss < k){
            left = mid+1;
        }
        else if(miss >= k){
            right = mid-1;
        }
    }
    return left + k;
};
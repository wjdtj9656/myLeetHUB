/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let arr = [...nums];
    arr.sort((a,b)=>a-b);
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
        let mid = (left + right) >> 1;
        if(arr[mid] == target){
            return nums.indexOf(target);
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else if(arr[mid] > target){
            right = mid - 1;
        }
    }
    return -1;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
    let x1 = 0;
    let x2 = 0;

    for(let num of nums1){
        x1 ^= num;
    }
    for(let num of nums2){
        x2 ^= num;
    }
    let m = nums1.length;
    let n = nums2.length;
    if(m%2==0 && n%2==0){
        return 0;
    }
    else if(m%2==0 && n%2==1){
        return x1;
    }
    else if(m%2==1 && n%2==0){
        return x2;
    }
    else{
        return x1^x2;
    }
};
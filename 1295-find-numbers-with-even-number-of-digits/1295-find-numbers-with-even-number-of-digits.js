/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let ans = 0;
    for(let num of nums){
        if(String(num).length % 2 == 0){
            ans++;
        }
    }
    return ans;
};
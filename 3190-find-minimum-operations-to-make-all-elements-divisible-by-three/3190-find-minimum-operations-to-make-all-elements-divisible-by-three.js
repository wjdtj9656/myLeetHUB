/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let cnt = 0;
    for(let num of nums){
        let temp = num % 3;
        if(temp == 1) cnt++;
        if(temp == 2) cnt++;
    }
    return cnt;
};
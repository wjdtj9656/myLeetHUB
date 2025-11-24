/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const answer = [];
    let curMod = 0; 

    for (let i = 0; i < nums.length; i++) {
        curMod = (curMod * 2 + nums[i]) % 5;
        answer.push(curMod === 0);
    }

    return answer;
};

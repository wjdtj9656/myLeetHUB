/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const answer = [];
    for(let candy of candies){
        if(candy + extraCandies >= max) answer.push(true);
        else answer.push(false);
    }
    return answer;
};
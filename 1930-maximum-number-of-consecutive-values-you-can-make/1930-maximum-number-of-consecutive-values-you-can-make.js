/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
    coins.sort((a,b)=>a-b);
    let res = 1;
    for(let num of coins){
        if(num > res) break;
        res += num;
    }
    return res;
};
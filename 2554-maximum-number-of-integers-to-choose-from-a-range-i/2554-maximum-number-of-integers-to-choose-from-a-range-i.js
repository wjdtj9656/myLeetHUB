/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    const map = {};
    for(let num of banned){
        if(!map[num]) map[num] = 0;
        map[num]++;
    }
    let sum = 0;
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(map[i] >0) continue;
        if(sum + i > maxSum) return cnt;
        else{
            sum += i;
            cnt++;
        }
    }
    return cnt;
};

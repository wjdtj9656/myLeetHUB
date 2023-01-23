/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trusts) {
    const map = new Map();
    const set = new Set();
    if(trusts.length === 0){
        if(n>1) return -1;
        else return 1;
    }
    for(let trust of trusts){
        map.set(trust[1], (map.get(trust[1]) || 0) +1);
        set.add(trust[0]);
    }
    for(let person of [...map]){
        const key = person[0];
        const value = person[1];
        if(value === n-1 && !set.has(key)) return key;
    }
    return -1;
};
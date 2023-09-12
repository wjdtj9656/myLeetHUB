/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const map = new Map();
    for(const char of s){
        map.set(char,(map.get(char) || 0)+1);
    }
    const set = new Set();
    let count = 0;
    for(let value of map.values()){
        while(value > 0 && set.has(value)){
            value--;
            count++;
        }
        set.add(value);
    }
    return count;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = new Map();
    for(let char of s){
        map.set(char, (map.get(char) || 0)+1);
    }
    for(let char of t){
        map.set(char, (map.get(char)-1));
        if(map.get(char) == 0) map.delete(char);
    }
    for(let [key,value] of map){
        return key;
    }
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    const map2 = new Map();
    for(let i=0; i<ransomNote.length; i++){
        map.set(ransomNote[i],(map.get(ransomNote[i]) || 0) + 1);
    }
    for(let i=0; i<magazine.length; i++){
        map2.set(magazine[i],(map2.get(magazine[i]) || 0) + 1);
    }
    for(let [key,value] of map){
        if(!map2.has(key) || map.get(key) > map2.get(key)) return false;
    }
    return true;
};
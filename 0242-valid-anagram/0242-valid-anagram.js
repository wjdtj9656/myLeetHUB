/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    if(s.length < t.length)[s,t] = [t,s];
    for(let i=0; i<s.length; i++){
        map1.set(s[i],(map1.get(s[i]) || 0) + 1);
    }
    for(let i=0; i<t.length; i++){
        map2.set(t[i],(map2.get(t[i]) || 0) + 1);
    }
    for(let [key,value] of map1){
        if(map1.get(key) !== map2.get(key)) return false;
    }
    return true;
};
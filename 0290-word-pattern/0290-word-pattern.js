/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    const set = new Set();
    s = s.split(' ');
    pattern = pattern.split('');
    if(s.length !== pattern.length) return false;
    for(let i=0; i<s.length; i++){
        if(map.has(pattern[i])){
            if(map.get(pattern[i]) !== s[i]) return false;
        }
        else{
            map.set(pattern[i],s[i]);
            set.add(s[i]);
        }
    }
    if(set.size !== [...map].length) return false;
    return true;
};
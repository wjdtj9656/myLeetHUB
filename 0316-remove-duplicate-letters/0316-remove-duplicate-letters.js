/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const map = new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i],(map.get(s[i]) || 0)+1);
    }
    let pos = 0;
    for(let i=0; i<s.length; i++){
        map.set(s[i],(map.get(s[i])-1));
        if(s[i] < s[pos]) pos = i;
        if(map.get(s[i]) == 0) {
            break;
        }
    }
    return s.length === 0? "" : s[pos] + removeDuplicateLetters(s.slice(pos+1).replaceAll(s[pos],""));
};
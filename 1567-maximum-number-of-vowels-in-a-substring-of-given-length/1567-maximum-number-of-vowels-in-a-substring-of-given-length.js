/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const q = [];
    const key = ["a","e","i","o","u"];
    let cnt = 0;
    for(let i=0; i<k; i++){
        q.push(s[i]);
        if(key.includes(s[i])) cnt++;
    }
    let result = cnt;
    for(let i=k; i<s.length; i++){
        if(key.includes(q[0])) cnt--;
        q.shift();
        q.push(s[i]);
        if(key.includes(s[i])){
            cnt++;
            result = Math.max(result, cnt);
        }
    }
    return result;
};
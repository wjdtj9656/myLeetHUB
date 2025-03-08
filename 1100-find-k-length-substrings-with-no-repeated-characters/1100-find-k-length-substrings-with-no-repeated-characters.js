/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    const map = {};
    if(s.length < k){
        return 0;
    }
    const n = s.length;
    let cnt = 0;
    for(let i=0; i<n; i++){
        if(i<k){
            map[s[i]] = (map[s[i]] || 0)+1;
            if(Object.keys(map).length >= k) cnt++;
        }else{
            map[s[i]] = (map[s[i]] || 0)+1;
            map[s[i-k]]--;
            if(map[s[i-k]] == 0){
                delete map[s[i-k]];
            }
            if(Object.keys(map).length <k){
            }else{
                cnt++;
            }
        }
    }
    return cnt;
};
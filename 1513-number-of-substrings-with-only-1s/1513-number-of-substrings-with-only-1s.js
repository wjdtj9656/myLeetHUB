/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let cnt = 0;
    let result = 0;
    for(let i=0; i<=s.length; i++){
        if(s[i] == '1') cnt++;
        else{
            result += ((cnt + 1) * cnt / 2) % (10**9 + 7);
            cnt = 0;
        }
    }
    return result
};
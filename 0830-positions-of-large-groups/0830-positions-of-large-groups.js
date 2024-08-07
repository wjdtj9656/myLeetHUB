/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let j = 0, res = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== S[i+1]) {
            if (i-j+1 >= 3) res.push([j,i]);
            j = i+1;
        }
    }
    return res;
};
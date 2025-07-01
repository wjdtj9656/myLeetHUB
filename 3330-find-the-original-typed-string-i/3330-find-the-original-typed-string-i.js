/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    const map = {};
    let prev = word[0];
    let temp = 1;
    let res = 0;
    for(let i=1; i<word.length; i++){
        if(word[i] == prev){
            temp++;
        }else{
            res += (temp-1);
            temp = 1;
        }
        prev = word[i];
    }
    res += temp-1;
    return res+1;
};
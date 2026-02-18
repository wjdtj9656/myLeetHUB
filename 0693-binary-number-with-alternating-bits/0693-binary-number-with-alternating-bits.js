/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const str = n.toString(2);
    let prev = str[0];
    for(let i=1; i<str.length; i++){
        if(prev == str[i]){
            return false;
        }
        prev = str[i];
    }
    return true;
};
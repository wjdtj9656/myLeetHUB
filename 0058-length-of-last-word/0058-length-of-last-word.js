/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result = s.split(' ');
    for(let i=result.length-1; i>=0; i--){
        if(result[i].length !== 0){
            return result[i].length;
        }
    }
};
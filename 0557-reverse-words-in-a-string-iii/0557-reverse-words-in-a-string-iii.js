/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ");
    let result = "";
    for(let str of arr){
        str = str.split("").reverse().join('');
        result += `${str} `;
    }
    return result.slice(0,result.length-1);
};
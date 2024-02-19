/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let cnt = 0;
    for(let i=0; i<text.length; i++){
        if(text[i] == " "){
            cnt++;
        }
    }
    let arr = text.split(" ");
    arr = arr.filter(w=>w!=='');
    let num = arr.length > 1?cnt / (arr.length-1)>>0:0;
    let num2 = arr.length > 1?cnt % (arr.length-1):cnt;
    return arr.join(" ".repeat(num)) + " ".repeat(num2);
};
/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let stack = [];
    let res = "";
    word = word.split("").reverse();
    while(word.length){
        if(stack.length == 9){
            res += stack.length + stack[0];
            stack = [];
        }
        if(stack.length == 0){
            stack.push(word.pop());
        }
        else{
            let now = word[word.length-1];
            if(stack[stack.length-1] == now){
                stack.push(word.pop());
            }
            else{
                res += stack.length + stack[0];
                stack = [];
            }
        }
    }
    res += stack.length + stack[0];
    return res;
};
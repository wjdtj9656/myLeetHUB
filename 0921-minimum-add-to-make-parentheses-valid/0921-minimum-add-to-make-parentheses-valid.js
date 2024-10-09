/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] == ")" && stack[stack.length-1] == "("){
            stack.pop();
            continue;
        }
        else if(s[i] == "]" && stack[stack.length-1] == "["){
            stack.pop();
            continue;
        }
        stack.push(s[i]);
    }
    return stack.length
};
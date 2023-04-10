/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i=0; i<s.length; i++){
        if(stack.length === 0){
            stack.push(s[i]);
        }
        else{
            const peek = stack[stack.length-1];
            if(peek === "("){
                if(s[i] === ")") stack.pop();
                else stack.push(s[i]);
            }
            else if(peek === "{"){
                if(s[i] === "}") stack.pop();
                else stack.push(s[i]);
            }
            else if(peek === "["){
                if(s[i] === "]") stack.pop();
                else stack.push(s[i]);
            }
        }
    }
    return stack.length === 0? true:false;
};
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(let token of tokens){
        if(token==='+' || token==='-' || token==='*' || token==='/'){
            let num1 = parseInt(stack.pop());
            let num2 = parseInt(stack.pop());
            if(token ==='+') stack.push(num1+num2);
            else if(token==='-') stack.push(num2-num1);
            else if(token==='*') stack.push(num1*num2);
            else if(token==='/') stack.push(num2/num1);
        }
        else stack.push(token);
    }
    return parseInt(stack[0]);
};
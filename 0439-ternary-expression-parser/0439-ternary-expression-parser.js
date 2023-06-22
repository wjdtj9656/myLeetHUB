var parseTernary = function(expression) {
  const stack = [];
    for(let i=expression.length-1; i>=0; i--){
        if(expression[i] === ":") continue;
        if(expression[i] !== "?"){
            stack.push(expression[i]);
            continue;
        }
        const first = stack.pop();
        const second = stack.pop();
        i--;
        if(expression[i] === "T"){
            stack.push(first);
        }
        else{
            stack.push(second);
        }
    }
    return stack.pop();
};
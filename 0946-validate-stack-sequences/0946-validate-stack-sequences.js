/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    while(pushed.length !== 0 || popped.length !==0){
        if(pushed.length === 0){
            if(stack[stack.length-1] === popped[0]){
                stack.pop();
                popped.shift();
            }
            else return false;
        }
        else if(stack[stack.length-1] !== popped[0]){
            stack.push(pushed.shift());
        }
        else if(stack[stack.length-1] === popped[0]){
            stack.pop();
            popped.shift();
        }
    }
    return true;
};
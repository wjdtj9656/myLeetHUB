/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let result = "";
    for(let char of s.split('')){
        if(char !== ']') stack.push(char);
        else{
            let now = [];
            while(true){
                nowChar = stack.pop();
                if(nowChar === '[') break;
                now.push(nowChar);
            }
            let num = "";
            let nowNum ="";
            while(true){
                num = Number(stack[stack.length-1]);
                if(num>=0 && num<=9) nowNum+=num;
                else break;
                stack.pop();
            }
            num = Number(nowNum.split('').reverse().join(''));
            stack.push(now.reverse().join('').repeat(num));
        }
    }
    for(let item of stack) result += item;
    return result;
};
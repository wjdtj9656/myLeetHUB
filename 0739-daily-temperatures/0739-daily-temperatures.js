/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const result = new Array(len).fill(0);
    const stack = [];
    for(let i=0; i<len; i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            let temp = stack.pop();
            result[temp] = i-temp;
        }
        stack.push(i);
    }
    return result;
};
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const result = new Array(len).fill(0);
    for(let i=0; i<len; i++){
        let cnt = 0;
        for(let j=i+1; j<len; j++){
            cnt++;
            if(temperatures[i] < temperatures[j]){
                result[i] = cnt;
                break;
            }
        }
    }
    return result;
};
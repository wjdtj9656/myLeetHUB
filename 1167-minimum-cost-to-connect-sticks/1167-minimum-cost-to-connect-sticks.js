/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    let result = 0;
    if(sticks.length === 1) return 0;
    sticks.sort((a,b)=>a-b);
    const combined = [];
    while(sticks.length || combined.length > 1){
        let sum = 0;
        let counter = 2;
        while(counter--){
            const condition = sticks.length && (!combined.length || (sticks[0] < combined[0]))
            sum += condition? sticks.shift() : combined.shift();
        }
        result += sum;
        combined.push(sum);
    }
    return result;
};

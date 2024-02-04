/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const c ="123456789";
    const arr =[];
    for(let i=0; i<c.length; i++){
        for(let j=i+1; j<=c.length; j++){
            const cur = parseInt(c.slice(i,j));
            if(cur <= high && cur >= low){
                arr.push(cur);
            }
        }
    }
    arr.sort((a,b)=>a-b);
    return arr;
};
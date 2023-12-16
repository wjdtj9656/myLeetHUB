/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const arr = [];
    const set = new Set();
    const go = (a,b,c,index) =>{
        if(index > 30) return;
        let sum = (2**a) * (3**b) * (5**c);
        if(set.has(sum)) return;
        arr.push(sum);
        set.add(sum);
        go(a+1,b,c,index+1);
        go(a,b+1,c,index+1);
        go(a,b,c+1,index+1);
    }
    go(0,0,0,0);
    arr.sort((a,b)=>a-b);
    return arr[n-1];
};
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let num = 1;
    const arr = [];
    if(n%2==0){
        for(let i=1; i<n/2; i++){
            arr.push(num);
            arr.push(-num);
            num++;
        }
    }else{
        arr.push(0);
        for(let i=1; i<n/2; i++){
            arr.push(num);
            arr.push(-num);
            num++;
        }
    }
    return arr;
};
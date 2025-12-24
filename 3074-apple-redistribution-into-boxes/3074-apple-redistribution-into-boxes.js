/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    const sum = apple.reduce((a,b)=>a+b,0);
    capacity.sort((a,b)=>b-a);
    let val = 0;
    let cnt = 0;
    for(let num of capacity){
        val += num;
        cnt ++;
        if(sum <= val){
            return cnt;
        }
    }
};
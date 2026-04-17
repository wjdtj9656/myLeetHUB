/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    const map = new Map();
    let i=0;
    let min =Infinity;
    for(let num of nums){
        let a = num;
        let b = parseInt(String(num).split('').reverse().join(''));
        if(map.has(a)){
            min = Math.min(min,i-map.get(a));
        }
        map.set(b,i);
        i++;
    }
    return min === Infinity? -1:min;

};
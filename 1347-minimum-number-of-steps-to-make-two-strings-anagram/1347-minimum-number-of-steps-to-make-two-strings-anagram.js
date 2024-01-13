/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    for(let i=0; i<s.length; i++){
        map1.set(s[i],(map1.get(s[i]) || 0)+1);
    }
    for(let i=0; i<t.length; i++){
        map2.set(t[i],(map2.get(t[i]) || 0)+1);
    }
    // console.log(map1);
    // console.log(map2)
    let sum =0;
    for(let val of map1.keys()){
        let num1 = map1.get(val) || 0;
        let num2 =map2.get(val) || 0;
        sum += Math.abs(num1-num2);
    }
    for(let val of map2.keys()){
        if(!map1.has(val)){
            sum += map2.get(val);
        }
    }
    return sum/2
};
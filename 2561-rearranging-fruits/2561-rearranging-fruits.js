/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    const map = {};
    for(let num of basket1){
        map[num] = (map[num] || 0)+1;
    }
    for(let num of basket2){
        map[num] = (map[num] || 0)+1;
    }
    const toSwap1 = [];
    const toSwap2 = [];
    const stand = {};
    for(let key of Object.keys(map)){
        if(map[key] % 2 ==1) return -1;
        stand[key] = map[key]/2;
    }
    const map1 ={};
    const map2 ={};
    for(let num of basket1){
        map1[num] = (map1[num] || 0) + 1;
        if(map1[num] > stand[num]) toSwap1.push(num);
    }
    for(let num of basket2){
        map2[num] = (map2[num] || 0) + 1;
        if(map2[num] > stand[num]) toSwap2.push(num);
    }
    toSwap1.sort((a,b)=>a-b);
    toSwap2.sort((a,b)=>b-a);
    const globalMin = Math.min(...basket1, ...basket2);
    let answer = 0;
    for(let i=0; i<toSwap1.length; i++){
        answer += Math.min(toSwap1[i], toSwap2[i], 2*globalMin);
    }
    return answer;

};
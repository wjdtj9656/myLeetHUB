/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let result = 0;
    for(let i=0; i<capacity.length; i++){
        capacity[i] -= rocks[i];
    }
    capacity.sort((a,b)=>a-b);
    for(let i=0; i<capacity.length; i++){
        if(capacity[i] > 0 && additionalRocks >= capacity[i]){
            additionalRocks-= capacity[i];
            capacity[i] = 0;
            result++;
        }
    }
    return capacity.filter((v)=>v===0).length;
};
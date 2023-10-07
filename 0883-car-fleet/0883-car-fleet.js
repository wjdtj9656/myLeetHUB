/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let len = position.length;
    const map = new Map();
    for(let i=0; i<len; i++){
        map.set(position[i], speed[i]);
    }
    const sortedPos = [...map.keys()].sort((a,b)=>b-a);

    let endTime = -1;
    let result = 0;
    for(let i=0; i<len; i++){
        let time = (target - sortedPos[i]) / map.get(sortedPos[i]);
        if(time > endTime){
            endTime = time;
            result++;
        }
    }
    return result;
};
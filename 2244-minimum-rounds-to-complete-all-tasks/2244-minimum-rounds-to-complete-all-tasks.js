/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const map = new Map();
    let answer = 0;
    for(let task of tasks){
        map.set(task, map.get(task)+1||1);
    }
    for(let [key,value] of [...map]){
        if(value === 1) return -1;
        answer += Math.ceil(value/3);
    }
    return answer;
};
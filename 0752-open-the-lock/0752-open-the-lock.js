/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let q = [];
    let step = 0;
    const visit = new Set();
    q.push("0000");
    while(q.length){
        const size = q.length;
        for(let i=0; i<size; i++){
            const cur = q.shift();
            // console.log(cur);
            if(deadends.includes(cur)) continue;
            if(cur === target) return step;
            for(let j=0; j<4; j++){
                const up = plus(cur, j);
                if(!visit.has(up)){
                    q.push(up);
                    visit.add(up);
                }
                const down = minus(cur, j);
                if(!visit.has(down)){
                    q.push(down);
                    visit.add(down);
                }
            }
        }
        step++;
    }
    return -1;
};
const plus = (nowStr,num) =>{
    let arr = nowStr.split('');
    if(arr[num] == 9){
        arr[num] = 0;
    } else arr[num] = Number(arr[num]) +1;
    return arr.join('');
}
const minus = (nowStr,num) =>{
    let arr = nowStr.split('');
    if(arr[num] == 0){
        arr[num] = 9;
    } else arr[num] -= 1;
    return arr.join('');
}
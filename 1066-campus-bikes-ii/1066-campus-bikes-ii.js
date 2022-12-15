/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
    let min = 10e9;
    let visit = new Set();
    const combine = (idx, sum) =>{
        if(idx === workers.length){
            min = Math.min(sum,min);
            return;
        }
        for(let i=0; i<bikes.length; i++){
            if(!visit.has(i)){
                visit.add(i);
                let dis = Math.abs(bikes[i][0] - workers[idx][0]) + Math.abs(bikes[i][1] - workers[idx][1]);
                combine(idx+1,sum + dis);
                visit.delete(i);
            }
        }
    }
    combine(0,0);
    return min;
};
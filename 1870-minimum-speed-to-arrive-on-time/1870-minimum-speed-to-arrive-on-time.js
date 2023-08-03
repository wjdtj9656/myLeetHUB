/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    
    let left = 1;
    let right = 10e7;
    let result = 10e9;
    while(left < right){
        let mid = (left + right) >> 1;
        let total_time = 0;
        for (let i = 0; i < dist.length - 1; i++) {
            total_time += Math.ceil(dist[i] / mid);
        }
        total_time += dist[dist.length - 1] / mid;
        
        if(total_time <= hour){
            right = mid;
        }
        else if(total_time > hour){
            left = mid + 1;
        }
    }
    return left == 10e7? -1: left;
};
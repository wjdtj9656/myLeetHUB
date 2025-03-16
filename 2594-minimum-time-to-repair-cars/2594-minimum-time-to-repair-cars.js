/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let left = 1;
    let right = Math.max(...ranks) * cars * cars;
    
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(check(ranks, mid) < cars){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};

const check = (ranks, time) => {   
    let total = 0;
    for(let r of ranks){
        total += Math.floor(Math.sqrt(time / r));
    }
    return total;
};

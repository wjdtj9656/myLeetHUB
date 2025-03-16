/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let left = 1;
    let right = Math.max(...ranks) * cars * cars;
    while(left < right){
        let mid = Math.floor((left + right)/2);
        if(getSum(ranks,mid) < cars){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return left;
};

const getSum = (r,time) =>{
    let sum = 0;
    for(let i=0; i<r.length; i++){
        sum += Math.floor(Math.sqrt(time/r[i]));
    }
    return sum;
}


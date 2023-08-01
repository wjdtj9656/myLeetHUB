/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a,b)=>a-b);
    let left = 0;
    let right = position[position.length-1];

    if(m === 2) return right - position[0];

    let result = -1;

    while(left < right){
        let mid = (left + right) >> 1;
        if(canplace(position, m, mid)){
            result = mid;
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return result;
};
const canplace = (baskets, cnt, guess) =>{
    let prev = 0;
    let place = 1;

    for(let i=1; i<baskets.length; i++){
        let distance = baskets[i] - baskets[prev];
        if(distance >= guess){
            place += 1;
            prev = i;

            if(place == cnt) return true;
        }
    }
    return false;
}
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let max = Math.max(...bloomDay);
    let left = 0;
    let right = max+1;
    let answer = -1;
    const check = (value) =>{
        const arr = [...bloomDay];
        for(let i=0; i<bloomDay.length; i++){
            if(arr[i] <= value){
                arr[i] = 0;
            }
        }
        let cnt = 0;
        let result = 0;
        for(let i=0; i<arr.length; i++){
            if(arr[i] === 0) cnt++;
            else cnt = 0;
            if(cnt == k){
                result++;
                cnt = 0;
            }
        }
        if(result >= m) answer = Math.max(result,answer);
        return result;
    }
    while(left < right){
        let mid = (left + right) >> 1;
        if(check(mid) >= m){
            right = mid;
        }
        else{
            left = mid + 1;
        }
    }
    if(answer === -1) left = -1;
    return left;
};
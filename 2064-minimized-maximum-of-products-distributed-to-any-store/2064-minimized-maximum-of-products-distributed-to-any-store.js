/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    let left = 1;
    let right = Math.max(...quantities);

    let res= right;

    while(left < right){
        let mid = Math.floor((left+right)/2);

        let store = 0;
        for(let quantity of quantities){
            store += Math.ceil(quantity / mid);
        }
        if(store <= n){
            res = mid;
            right = mid;
        }else{
            left = mid+1;
        }
    }
    return res;
};
/**
 * @param {number[]} heroes
 * @param {number[]} monsters
 * @param {number[]} coins
 * @return {number[]}
 */
var maximumCoins = function(heroes, monsters, coins) {
    const arr = [];
    for(let i=0; i<monsters.length; i++){
        arr.push([monsters[i],coins[i]]);
    }
    arr.sort((a,b)=>a[0]-b[0]);
    const sum = [arr[0][1]];
    for(let i=1; i<arr.length; i++){
        sum.push(sum[i-1] + arr[i][1]);
    }
    //console.log(sum)
    let ans = [];
    for(let i=0; i<heroes.length; i++){
        const target = heroes[i];
        let left = 0;
        let right = arr.length-1;
        while(left < right){
            let mid = (left + right) >> 1;
            if(arr[mid][0] > target){
                right = mid;
            }
            else{
                left = mid + 1;
            }
        }
        //console.log(left,right,arr)

        if(arr[left][0] <= target){
            ans.push(sum[left]);
        }
        else if(left === 0){
            ans.push(0);
        }else{
            ans.push(sum[left-1]);
        }
    }
    return ans;
};
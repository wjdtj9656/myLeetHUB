/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const map = new Map();
    let answer = 0;
    for(let i=0; i<word.length; i++){
        map.set(word[i],(map.get(word[i]) || 0)+1);
    }
    const arr = [...map];
    arr.sort((a,b)=>b[1]-a[1]);
    let cnt = 0;
    let num = 1;
    for(let i=0; i<arr.length; i++){
        cnt++;
        if(cnt >= 9){
            num+=1;
            cnt = 1;
        }
        answer += map.get(arr[i][0])*num;
    }
    return answer;
};
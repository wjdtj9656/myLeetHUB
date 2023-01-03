/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const arr = Array.from(Array(strs.length),()=>new Array());
    let answer = 0;
    for(let i=0; i<strs.length; i++){
        for(let j=0; j<strs[i].length; j++){
            arr[i].push(strs[i][j]);
        }
    }
    for(let i=0; i<arr[0].length; i++){
        let temp = '';
        for(let j=0; j<arr.length; j++){
            temp += arr[j][i];
        }
        const str = temp;
        str === temp.split('').sort().join('')? '':answer++;
    }
    return answer;
};
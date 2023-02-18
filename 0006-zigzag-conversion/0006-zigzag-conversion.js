/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arr = Array.from(new Array(numRows),()=>new Array());
    let index = 0;
    let plusFlag = true;
    if(numRows === 1) return s;
    for(let i=0; i<s.length; i++){
        if(index == 0) plusFlag = true;
        else if(index == numRows-1) plusFlag = false;
        arr[index].push(s[i]);
        if(plusFlag) index++;
        else index--;
    }
    return arr.flat().join("")
};
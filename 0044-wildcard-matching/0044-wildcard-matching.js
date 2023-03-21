/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p === "*") return true;
    let sIndex = 0, pIndex = 0;
    let sPointer = -1, pPointer = -1;
    while(sIndex < s.length){
        if((pIndex < p.length && s[sIndex] === p[pIndex]) || p[pIndex] ==="?"){
            sIndex++;
            pIndex++;
        }
        else if(pIndex < p.length && p[pIndex] === "*"){
            pPointer = pIndex;
            sPointer = sIndex;
            pIndex++;
        }
        else if(pPointer === -1) return false;
        else{
            pIndex = pPointer + 1;
            sIndex = sPointer + 1;
            sPointer = sIndex;
        }
    }
    for(let i=pIndex; i<p.length; i++){
        if(p[i] !== "*") return false;
    }
    return true;
};
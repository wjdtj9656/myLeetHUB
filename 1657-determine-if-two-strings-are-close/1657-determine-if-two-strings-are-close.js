/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const map1 = new Map();
    const map2 = new Map();
    for(let i=0; i<word1.length; i++){
        map1.set(word1[i],(map1.get(word1[i]) || 0 )+1);
    }
    for(let i=0; i<word2.length; i++){
        map2.set(word2[i],(map2.get(word2[i]) || 0 )+1);
    }
    console.log(map1);
    console.log(map2);
    if(map1.size != map2.size) return false;
    for(let val of map1.keys()){
        if(!map2.has(val)){
            return false;
        }
    }
    const arr1=[];
    const arr2=[];
    for(let val of map1.values()){
        arr1.push(val);
    }
    for(let val of map2.values()){
        arr2.push(val);
    }
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]) return false;
    }
    return true;
};
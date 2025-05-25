/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const map ={};
    const map2 = {};
    for(let word of words){
        if(word[0] == word[1]){
            map2[word] = (map2[word] || 0)+1;
            continue;
        }
        map[word] = (map[word] || 0)+1;
    }
    let res = 0;
    const set = new Set();
    for(let key in map){
        if(map[key[1]+key[0]] && !set.has(key[1]+key[0]) && !set.has(key[0]+key[1])){
            res += Math.min(map[key], map[key[1]+key[0]])*2;
            set.add(key);
            set.add(key[0]+key[1]);
        }
    }

    for(let key in map2){
        if(map2[key] % 2 == 0){
            res += map2[key];
            delete map2[key];
        }else{
            res += map2[key]-1;
            map2[key] = 1;
        }
    }
    return Object.keys(map2).length > 0? res*2+2 : (res)*2;
};
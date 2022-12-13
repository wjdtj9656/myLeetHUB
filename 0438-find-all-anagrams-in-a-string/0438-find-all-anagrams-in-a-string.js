/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let [left,right] = [0,0];
    const len = s.length;
    const sMap = new Map();
    const window = new Map();
    const result = [];
    for(let str of p){
        if(sMap.has(str)) sMap.set(str,sMap.get(str)+1);
        else sMap.set(str,1);
    }
    let valid = 0;
    while(right < len){
        let nr = s[right];
        right++;
        if(sMap.has(nr)){
            if(window.has(nr)) window.set(nr,window.get(nr)+1);
            else window.set(nr,1);
            if(sMap.get(nr) === window.get(nr)) valid++;
        }
        while(right - left >= p.length){
            if(valid === [...sMap].length) result.push(left);
            let nl = s[left];
            left++;
            if(sMap.has(nl)){
                if(sMap.get(nl) === window.get(nl)) valid--;
                window.set(nl,window.get(nl)-1);
            }
        }
    }
    return result;
};
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map = new Map();
    const window = new Map();
    let valid = 0;
    for(let str of s1.split('')){
        if(!map.has(str)) map.set(str,1);
        else map.set(str,map.get(str)+1);
    }
    let mapSize = [...map].length;
    let left = 0, right = 0;
    while(right < s2.length){
        let now = s2[right];
        right++;
        if(map.has(now)){
            if(!window.has(now)) window.set(now,1);
            else window.set(now,window.get(now)+1);
            if(window.get(now) === map.get(now)) valid++;
        }
        while(right - left >= s1.length){
            if(valid === mapSize) return true;
            let now2 = s2[left];
            left++;
            if(map.has(now2)){
                if(window.get(now2) === map.get(now2)) valid--;
                window.set(now2, window.get(now2)-1);
            }
        }
    }
    return false;
    
};
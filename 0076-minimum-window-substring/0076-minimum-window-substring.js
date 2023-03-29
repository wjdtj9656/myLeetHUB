/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    const result = [-Infinity,Infinity];
    let start = 0;
    const map = new Map();
    let correct = t.length;
    for(let i=0; i<t.length; i++){
        map.set(t.charCodeAt(i),(map.get(t.charCodeAt(i)) || 0)+1);
    }
    for(let i=0; i<s.length; i++){
        if(map.get(s.charCodeAt(i)) > 0){
            correct--;
        }
        map.set(s.charCodeAt(i),map.get(s.charCodeAt(i))-1);
        while(correct === 0){
            if(result[1] - result[0] > i - start){
                result[1] = i;
                result[0] = start;
            }
            map.set(s.charCodeAt(start), map.get(s.charCodeAt(start))+1);
            if(map.get(s.charCodeAt(start)) > 0){
                correct++;
            }
            start++;
        }
    }
    return result[1] === Infinity? "":s.slice(result[0],result[1]+1);
};
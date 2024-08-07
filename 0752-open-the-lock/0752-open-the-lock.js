/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    const visit = new Set(['0000']);
    const next = (s='0000') =>{
        const ans = [];
        for(let i=0; i<s.length; i++){
            ans.push(s.slice(0,i) + ((+s[i]+1)%10).toString() + s.slice(i+1));
            ans.push(s.slice(0,i) + ((+s[i]+9)%10).toString() + s.slice(i+1));
        }
        return ans;
    }
    const q = [['0000', 0]];
    for(let [cur,turns] of q){
        if(cur === target) return turns;
        if(dead.has(cur)) continue;
        for(let n of next(cur)){
            if(visit.has(n)) continue;
            visit.add(n);
            q.push([n,turns+1]);
        }
    }
    return -1;
};
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const parent = new Array(n).fill(0).map((_,index)=>index);
    const find = (x) =>{
        if(x != parent[x]){
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    const union = (a,b)=>{
        const aP = find(a);
        const bP = find(b);
        if(aP == bP){
            return true;
        }else{
            if(aP < bP){
                parent[aP] = bP;
            }
            else{
                parent[bP] = aP;
            }
        }
    }
    const con = new Array(n).fill(0).map(()=>[]);
    for(let [s,e] of edges){
        con[s].push(e);
        con[e].push(s);
        union(e,s);
    }
    const map = {};
    for (let i = 0; i < parent.length; i++) {
        const root = find(i); // 최종 대표 찾기
        if (!map[root]) {
            map[root] = [];
        }
        map[root].push(i);
    }

    let ans = 0;
    for(let key of Object.keys(map)){
        let num = 0;
        for(let val of map[key]){
            num += con[val].length;
        }
        num = Math.floor(num/2);
        if((map[key].length*(map[key].length-1))/2 == num) ans++;
    }
    return ans;
};
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(S) {
    const map = new Map();
    const pq = [];
    for(let s of S) map.set(s, (map.get(s) || 0)+1);

    for(let [key,value] of map) pq.push([key,value]);

    let res = "";
     pq.sort((a,b)=>b[1]-a[1]);
     
    while(pq.length != 0){
      let lastChar = res[res.length-1];
      let first = pq.shift();

      if(lastChar != first[0]){
        res += first[0];
        if(first[1] != 1) pq.push([first[0], first[1]-1]);
      }else{
        let second = pq.shift();
        if(second == null) return "";
        res+=second[0];
        pq.push(first);
        if(second[1]!=1) pq.push([second[0],second[1]-1])
      }
      pq.sort((a,b)=>b[1]-a[1]);
    }
    return res;
};
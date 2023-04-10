/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const arr = new Array(n);
    if(n-1 !== edges.length) return false;
    if(!edges.length) return true;
    for(let i=0; i<n; i++){
        arr[i] = i;
    }
    const findParent = (a) =>{
        if(a == arr[a]) return a;
        else return findParent(arr[a]);
    }
    const union = (a,b) =>{
        let c = findParent(a);
        let d = findParent(b);
        if(c===d) return false;
        arr[c] = d;
        return true;
    }
    for(let [start,end] of edges){
        if(!union(start,end)) return false;
        console.log(arr)
    }
    return true;
};
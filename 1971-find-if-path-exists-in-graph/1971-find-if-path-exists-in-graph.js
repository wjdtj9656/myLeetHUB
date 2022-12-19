/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = i;
    }
    const findParent = (value) =>{
        if(arr[value] === value) return value;
        return findParent(arr[value]);
    }
    const union = (value1, value2) =>{
        let root1 = findParent(value1);
        let root2 = findParent(value2);
        if(root1 === root2) return true;
        arr[root2] = root1;
        return false;
    }
    for(let edge of edges){
        union(edge[0],edge[1]);
    }
    if(findParent(arr[source]) === findParent(arr[destination])) return true;
    return false;
};
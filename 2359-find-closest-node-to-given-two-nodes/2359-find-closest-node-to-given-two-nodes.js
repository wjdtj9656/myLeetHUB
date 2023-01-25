/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    if(node1 === node2) return node1;
    let result = -1;
    const map1 = new Map();
    const map2 = new Map();
    let cnt = 0;
    while(!map1.has(node1) && node1 !== -1){
        map1.set(node1,++cnt);
        node1 = edges[node1];
    }
    cnt = 0;
    while(!map2.has(node2) && node2 !== -1){
        map2.set(node2,++cnt);
        node2 = edges[node2];
    }
    let max = 0;
    let min = Infinity;
    for(let i=0; i<edges.length; i++){
        if(map1.get(i) === undefined &&  map2.get(i) === undefined) continue;
        max = Math.max(map1.get(i),map2.get(i));
        if(min > max){
            min = max;
            result = i;
        }
    }
    return result;
};
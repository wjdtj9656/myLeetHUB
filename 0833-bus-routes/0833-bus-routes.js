/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    const map = new Map();

    for(let i=0; i<routes.length; i++){
        for(let j=0; j<routes[i].length; j++){
            if(!map.has(routes[i][j])){
                map.set(routes[i][j],[i]);
            }
            else{
                map.get(routes[i][j]).push(i);
            }
        }
    }
    if(!map.has(source) || !map.has(target)){
        return -1;
    }
    if(source == target) return 0;

    const busVisit = new Set();
    const stopVisit = new Set();
    const q = [source];
    let res = 0;

    while(q.length){
        res++;
        const stop = q.length;
        for(let i=0; i<stop; i++){
            const cur = q.shift();
            for(const busId of map.get(cur) || []){
                if(busVisit.has(busId)) continue;
                
                busVisit.add(busId);
            for(const next of routes[busId] ||[]){
                if(stopVisit.has(next)) continue;
                if(next === target) return res;
                q.push(next);
                stopVisit.add(next);
            }
        }
    }
}
return -1;
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const visit = new Array(n).fill(0);
    const arr = new Array(n)
    if(source == destination) return true;
    for(let [s,e] of edges){
        if(!arr[s]) arr[s] = []
        if(!arr[e]) arr[e] = []
        arr[s].push(e);
        arr[e].push(s);
    }
    q = [source];
    while(q.length) {
        let cx = q.shift();
        if(!arr[cx]) continue;
        for(let i=0; i<arr[cx].length; i++){
            if(visit[arr[cx][i]] == 0){
                q.push(arr[cx][i]);
                visit[arr[cx][i]] = 1;
                if(arr[cx][i] == destination) return true;
            }
        }
    }

    return false;
};
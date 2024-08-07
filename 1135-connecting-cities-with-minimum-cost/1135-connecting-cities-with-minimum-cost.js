/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    connections.sort((a,b)=>a[2]-b[2]);
    const arr = new Array(n+1);
    for(let i=1; i<=n; i++){
        arr[i] = i;
    }
    const getP = (a)=>{
        if(arr[a] == a) return a;
        return arr[a] = getP(arr[a]);
    }
    const union = (a,b) =>{
        a = getP(a);
        b = getP(b);
        if(a==b) return false;
        if(a>b) arr[a] = b;
        else arr[b] = a;
        return true;
    }
    let res = 0;
    let cnt = 0;
    for(let i=0; i<connections.length; i++){
        if(union(connections[i][0], connections[i][1])){
            res += connections[i][2];
            cnt++;
        }
    }
    if(cnt != n-1) return -1;
    return res;
};
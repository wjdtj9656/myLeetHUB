/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(n, prerequisites, queries) {
    const dis = new Array(n).fill(false).map(()=>new Array(n).fill(false));
    const ans = [];
    for(let [start,end] of prerequisites){
        dis[start][end] = true;
    }
    for(let k=0; k<n; k++){
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                if(dis[i][k] && dis[k][j]){
                    dis[i][j] = true;
                }
            }
        }
    }
    for(let [start,end] of queries){
        if(dis[start][end]){
            ans.push(true);
        }else{
            ans.push(false);
        }
    }
    return ans;
};
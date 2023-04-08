/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //key 가는데 필요한 것
    const map = new Map();
    //key 이후에 갈 수 있는 것.
    const connect = new Map();
    const set = new Set();
    for(let [next,now] of prerequisites){
        if(map.has(next)) map.set(next,[map.get(next),now].flat());
        else map.set(next,[now]);
        if(connect.has(now)) connect.set(now,[connect.get(now),next].flat());
        else connect.set(now,[next]);
    }
    const q = [];
    for(let i=0; i<numCourses; i++){
        if(!map.has(i)){
            q.push(i);
            set.add(i);
        }
    }
    while(q.length){
        const now = q.shift();
        let num1 = connect.get(now);
        if(!num1) continue;
        for(let val of num1){
            let arr = map.get(val);
            for(let i=0; i<arr.length; i++){
                if(set.has(val)) break;
                if(!set.has(arr[i])) break;
                if(i === arr.length-1){
                    q.push(val);
                    set.add(val);
                }
            }
        }
    }
    return set.size === numCourses? true: false;
};
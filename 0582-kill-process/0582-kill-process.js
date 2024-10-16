/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
   const map = {};
   const res = [];
   for(let i=0; i<pid.length; i++){
    if(!map[ppid[i]]) map[ppid[i]] = []
    map[ppid[i]].push(pid[i]);
   }
   res.push(kill);
   const dfs = (value) =>{
    if(!map[value]) return;
    const arr = map[value];
    for(let i=0; i<arr.length; i++){
        dfs(arr[i]);
        res.push(arr[i]);
    }
   }
   dfs(kill);
   return res.sort((a,b)=>a-b);
};
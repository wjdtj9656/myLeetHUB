/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    
    if(bombs.length <= 1) return bombs.length;
    let result = 1;
	
    let adj = {}, maxSize = 0;
    const check = (x, y, cx, cy, r) =>{
        return ((x-cx)**2 + (y-cy)**2 <= r**2)
    }
    for(let i=0; i<bombs.length; i++){
        for(let j=i+1; j<bombs.length; j++){
            if(!adj[i]) adj[i] = [];
            if(!adj[j]) adj[j] = [];
            let bomb1 = bombs[i];
            let bomb2 = bombs[j];
            let first = check(bomb1[0], bomb1[1], bomb2[0], bomb2[1], bomb1[2]);
            if(first) adj[i].push(j);
            let second = check(bomb1[0], bomb1[1], bomb2[0], bomb2[1], bomb2[2]);
            if(second) adj[j].push(i);
        }
    }
    const dfs = (node, visited) =>{
        let deno = 1;
        visited[node] = true;
        let childs = adj[node] || [];
        for(let child of childs){
            if(visited[child]) continue;
            deno += dfs(child, visited);
        }
        result = Math.max(result, deno);
        return deno;
    }
    for(let i=0; i<bombs.length; i++){
        dfs(i,{});
    }
    return result;
};
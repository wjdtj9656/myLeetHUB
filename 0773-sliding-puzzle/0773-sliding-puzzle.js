/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const m = 2 , n = 3;
    let start = "";
    let goal = "123450";
    const visit = new Set();
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            start+=board[i][j];
        }
    }
    const connection = [[1,3],[0,2,4],[1,5],[0,4],[1,3,5],[2,4]];
    const swap = (str, i, j) =>{
        if(i > j)[i,j] = [j,i];
        return str.slice(0,i) + str[j] + str.slice(i+1,j) + str[i] + str.slice(j+1,str.length);
    }
    const q = [[start,0]];
    while(q.length){
        let [now,cnt] = q.shift();
        if(visit.has(now)) continue;
        visit.add(now);
        if(now === goal){
            return cnt;
        }
        const index = now.indexOf("0");
        for(let adj of connection[index]){
            q.push([swap(now,index,adj), cnt+1]);
        }
    }
    return -1;
};
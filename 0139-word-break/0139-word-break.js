/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const results = [];
    const set = new Set(wordDict);
    const visit = new Set();
    
    const bfs = () =>{
        const q = [];
        q.push([0]);
        while(q.length){
            let start = q.shift();
            if(!visit.has(start)){
                visit.add(start);
                if(start === s.length) return true;
                for(let i=start; i<=s.length; i++){
                    if(set.has(s.slice(start, i))){
                        q.push(i);
                    }
                }
            }
        }
        return false;
    }
    return bfs();
};
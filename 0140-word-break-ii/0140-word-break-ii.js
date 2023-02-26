var wordBreak = function(s, wordDict) {
    const memo = new Map();
    const search = (str) =>{
        if(memo.has(str)) return memo.get(str);
        if(!str.length) return [];
        
        const result =[];
        for(let word of wordDict){
            
            if(str.startsWith(word)){
                let next = str.slice(word.length);
                let paths = search(next);
                
                if(!next.length && !paths.length) result.push(word);
                result.push(...paths.map(rest => word +" "+ rest));
            }
        }
        memo.set(str,result);
        return result;
    }
    return search(s);
};
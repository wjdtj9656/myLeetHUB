/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let sum = 0;
    const arr = new Array(words.length).fill(0);
    const isCheck = (word) =>{
        if(word == 'a' || word == 'e' || word =='i' || word=='o' || word=='u')return true;
        return false; 
    }
    for(let i=0; i<words.length; i++){
        if (
            isCheck(words[i][0]) && 
            isCheck(words[i][words[i].length - 1])
            ) {
                sum++;
            }

        arr[i]=sum;
    }
    const answer = [];
    for(let i=0; i<queries.length; i++){
        let s = queries[i][0];
        let e = queries[i][1];
        if(s-1 < 0) answer.push(arr[e]);
        else answer.push(arr[e] - arr[s-1]);
    }
    return answer;
};
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer = [];
    for(let i=0; i<=n; i++){
        let str = i.toString(2);
        let cnt = 0;
        for(let j=0; j<str.length; j++){
            if(str[j] === "1") cnt++;
        }
        answer.push(cnt);
    }
    return answer;
};
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len = ratings.length;
    const left = new Array(len).fill(1);
    const right = new Array(len).fill(1);
    for(let i=1; i<len; i++){
        if(ratings[i] > ratings[i-1]){
            left[i] = left[i-1] + 1;
        }
    }
    for(let i=len-2; i>=0; i--){
        if(ratings[i] > ratings[i+1]){
            right[i] = right[i+1] + 1;
        }
    }
    const answer= new Array(left.length);
    for(let i=0; i<ratings.length; i++){
        answer[i] = Math.max(left[i], right[i]);
    }
    return answer.reduce((a,b)=>a+b,0);
};
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = new Map();
    const answer = [];
    for(let i=0; i<groupSizes.length; i++){
        if(!map.has(groupSizes[i])){
            map.set(groupSizes[i],[i]);
        }
        else{
            map.get(groupSizes[i]).push(i);
        }
    }
    for(let [key,value] of map){
        const now = value;
        let cnt = 0;
        let temp = [];
        while(now.length != 0){
            temp.push(now.pop());
            cnt++;
            if(cnt === key){
                answer.push(temp);
                temp = [];
                cnt = 0;
            }
        }
    }
    return answer;
};
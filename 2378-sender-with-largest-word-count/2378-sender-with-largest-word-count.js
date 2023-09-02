/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    const name = new Map();
    let index = 0;
    for(let message of messages){
        let arr = message.split(" ");
        name.set(senders[index],(name.get(senders[index]) || 0)+arr.length);
        index++;
    }
    const result = [];
    for(let [key,value] of name){
        result.push([key,value]);
    }
    result.sort((a,b)=>a-b);
    result.sort((a,b)=>b[1]-a[1]);
    result.sort((a,b)=>{
        if(a[1] == b[1]){
            if(a[0] < b[0]) return 1;
            else if(a[0] > b[0]) return -1;
            else return 0;
        }
        return b[1] - a[1];
    })
    console.log(result)
    return result[0][0];
};
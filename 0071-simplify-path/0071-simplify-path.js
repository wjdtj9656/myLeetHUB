/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const regex = /[//]{1,3000}/g;
    const result = [];
    let answer = "";
    let now = 0;
    //2
    path = path.replaceAll(regex,"/");
    path = path.split("/");
    path = path.filter((c=>c !==""))
    for(let i=0; i<path.length; i++){
        if(path[i] === '.') continue;
        else if(path[i] === ".."){
            if(now > 0){
                result.pop();
                now--;
            }
            else continue;
        }
        else{
            now++;
            result.push(path[i]);
        }
    }
    answer += "/"
    for(let i=0; i<result.length; i++){
        answer += result[i] +"/";
    }
    return answer.length === 1? "/":answer.slice(0,answer.length-1);
};
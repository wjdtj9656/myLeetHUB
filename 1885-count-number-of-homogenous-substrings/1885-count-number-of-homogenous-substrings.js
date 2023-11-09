/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const arr = [];
    let answer = 0;
    for(let i=0; i<s.length; i++){
        if(arr.length == 0) arr.push(s[i]);
        else{
            if(arr[0] == s[i]){
                arr.push(s[i]);
            }
            else if(arr[0] !== s[i]){
                let cnt = 0;
                while(arr.length !== 0){
                    cnt++;
                    arr.pop();
                }
                answer = (answer + (cnt * (cnt+1))/2 >> 0)%(10e8+7);
                i--;
            }
        }
    }
    for(let i=arr.length; i>=0; i--){
        answer = (answer + i)%(10e8+7); 
    }
    return answer%(10e8+7);
};
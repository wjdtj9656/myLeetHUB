/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    s = s.reverse();
    let prev = 0;
    while(s[prev] == " "){
        prev++;
    }
    const rever =(start,end) =>{
        while(start < end){
            [s[start],s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
    } 
    for(let i=0; i<s.length; i++){
        if(s[i] == ' ' ){
            rever(prev, i-1);
            prev= i+1;
        }
        else if(i == s.length-1){
            rever(prev,i)
        }
    }
};
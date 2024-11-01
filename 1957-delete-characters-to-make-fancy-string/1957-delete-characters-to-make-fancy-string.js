/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let res=''
    let ls='.'
    let count=0
    for(let i=0;i<s.length;i++){
        if(s[i]==ls)count++
        else {
            count=1
            ls=s[i]
        }

        if(count>2){
            continue
        }
        res+=s[i]
    }
    return res    
};
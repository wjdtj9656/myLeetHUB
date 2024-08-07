/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const output = [];
    const part = [];
    const isPalindrome = str => str === str.split('').reverse().join('');

    const findP = (str, start, part, res) => {
        if(start == str.length){
            res.push([...part]);
            return;
        }
        for(let i=start+1; i<=str.length; i++){
            const target = str.slice(start,i);
            if(isPalindrome(target)){
                part.push(target);
                findP(str,i,part,res);
                part.pop();
            }
        }
    }
    findP(s,0,part,output);
    return output
};
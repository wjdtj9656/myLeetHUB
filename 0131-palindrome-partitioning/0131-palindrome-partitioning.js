/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const isPalindrome = (str) => str === str.split('').reverse().join('');
    const result = [];
    const combination = (arr, index) =>{
        if(index === s.length){
            result.push(arr);
            return;
        }
        for(let i=index+1; i<=s.length; i++){
            let target = s.slice(index, i);
            if(isPalindrome(target)){
                combination([...arr,target],i)
            }
        }
    }
    combination([],0);
    return result;
};
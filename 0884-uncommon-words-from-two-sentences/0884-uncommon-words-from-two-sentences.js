/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
     let a = [...s1.split(' '), ...s2.split(' ')]
    const obj = {};
    
    for(let i of a) {
        if(i in obj) {
            obj[i] += 1
        } else {
            obj[i] = 1
        } 
    }
    
    a = [];
    
    for(let i in obj) {
        if(obj[i] == 1) {
            a.push(i)
        }
    }
    
    return a;   
};
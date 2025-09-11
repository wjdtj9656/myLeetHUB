/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    const index = [];
    const value1 = [];
    const value2 = [];
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])) {
            index.push(i);
            let num = s.charCodeAt(i);
            if(num >=97){
                value1.push(s[i]);
            }
            else{
                value2.push(s[i]);
            }
        }
    }
    value1.sort();
    value2.sort();
    if(index.length == 0) return s;
    let result = s.split('');
    for(let i=0; i<value2.length; i++){
        result[index[i]] = value2[i];
    }
    for(let i=0; i<value1.length; i++){
        result[index[value2.length+i]] = value1[i];
    }
    return result.join('');
};
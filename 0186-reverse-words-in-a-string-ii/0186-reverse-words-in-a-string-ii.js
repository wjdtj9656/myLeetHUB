/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    s.reverse();
    let left = 0;
    for(let i=0; i<s.length; i++){
        if(s[i+1] === ' ' || s[i+1] === undefined){
            let right = i;
            while(left < right){
                [s[left],s[right]] = [s[right],s[left]];
                left++; right--;
            }
            left = i+2;
        }
    }
};
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const search = (word)=>{
        let len = word.length-1;
        for(let i=0; i<word.length; i++){
            if(word[i] != word[len]){
                return false;
            }
            if(len < i) return true;
            len--;
        }
        return true;
    }
    for(let word of words){
        if(search(word)){
            return word;
        }
    }
    return "";
};
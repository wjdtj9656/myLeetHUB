/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = "";
    
    for (const word of words) {
        let totalWeight = 0;
        for (let i = 0; i < word.length; i++) {
            const charCode = word.charCodeAt(i) - 97;
            totalWeight += weights[charCode];
        }
        
        const remainder = totalWeight % 26;
        const mappedCharCode = 122 - remainder;
        result += String.fromCharCode(mappedCharCode);
    }
    
    return result;
};
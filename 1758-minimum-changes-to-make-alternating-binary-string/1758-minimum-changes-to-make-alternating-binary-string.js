/**
 * @param {string} s
 * @return {number}
 */
const minOperations = function(s) {
    let count0 = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] !== '0') count0++;
        } else {
            if (s[i] !== '1') count0++;
        }
    }
    
    let count1 = s.length - count0;
    
    return Math.min(count0, count1);
};
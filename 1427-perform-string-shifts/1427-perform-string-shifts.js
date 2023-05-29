/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    s = s.split('');
    for(let [direction, amount] of shift){
        if(direction == 0){
            while(amount-- > 0){
                s.push(s.shift());
            }
        }
        else{
            while(amount-- > 0){
                s.unshift(s.pop());
            }
        }
    }
    return s.join("");
};
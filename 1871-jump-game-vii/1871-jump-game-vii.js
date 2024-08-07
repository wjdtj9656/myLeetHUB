/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    if (s[s.length - 1] === '1') return false;
    
    const n = s.length;
    const queue = [0];
    let farthest = 0;
    
    while (queue.length > 0) {
        const curr = queue.shift();
        
        if (curr === n - 1) return true;
        
        const start = Math.max(curr + minJump, farthest + 1);
        const end = Math.min(curr + maxJump, n - 1);
        
        for (let i = start; i <= end; i++) {
            if (s[i] === '0') {
                queue.push(i);
            }
        }
        
        farthest = curr + maxJump;
    }
    
    return false;
};
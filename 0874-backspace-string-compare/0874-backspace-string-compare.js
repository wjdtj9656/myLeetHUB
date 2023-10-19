/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack1 = [];
    const stack2 = [];
    for(let i=0; i<s.length; i++){
        if(s[i] != '#') stack1.push(s[i]);
        else stack1.pop();
    }
    for(let i=0; i<t.length; i++){
        if(t[i] != '#') stack2.push(t[i]);
        else stack2.pop();
    }
    if(stack1.length !== stack2.length) return false;
    
    for(let i=0; i<stack1.length; i++){
        if(stack1[i] != stack2[i]) return false;
    }
    return true;
};
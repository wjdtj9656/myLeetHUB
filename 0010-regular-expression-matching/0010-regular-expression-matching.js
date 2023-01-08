/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    
    const search = (index1, index2) =>{
        let result;
        if(index1 > s.length) return false;
        if(index1 === sLen && index2 === pLen) return true;
        if(s[index1] == p[index2] || p[index2] =='.'){
            if(p[index2+1] == '*'){
                result = search(index1+1,index2) || search(index1,index2+2);
            }
            else{
                result = search(index1+1,index2+1);
            }
        }
        else{
            if(p[index2+1] == '*'){
                result = search(index1,index2+2);
            }
            else result = false;
        }
        return result;
    }
    
    return search(0,0);
};
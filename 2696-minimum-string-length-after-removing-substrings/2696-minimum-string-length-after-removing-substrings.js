/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    while(s.indexOf("AB") >= 0 || s.indexOf("CD") >= 0){
        if(s.indexOf("AB") >= 0){
            s = s.replace("AB","");
        }else{
            s = s.replace("CD","");
        }
    }
    return s.length;
};
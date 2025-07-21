/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const res = [s[0],s[1]];
	for(let i=2; i<s.length; i++){
	   if(s[i-1] == s[i] && s[i-2] == s[i]){
		continue;
	   }
	   else{
		res.push(s[i]);
	   }
	}
	return res.join("");
};
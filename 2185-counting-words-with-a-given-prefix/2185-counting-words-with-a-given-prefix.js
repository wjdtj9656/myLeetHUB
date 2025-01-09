var prefixCount = function(words, pref) {
    let ans = 0;
	for(let i=0; i<words.length; i++) {
		if(words[i].startsWith(pref)){
			ans++;
		}
	}
	return ans;
};
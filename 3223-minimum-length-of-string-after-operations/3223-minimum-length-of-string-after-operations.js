var minimumLength = function(s) {
    const map = {};
	for(let char of s) {
		map[char] = (map[char] || 0) + 1;
	}
	let check = true;
	let res = s.length;
	while(check){
		check = false;
		let key1 ='';
		for(let key in map){
			if(map[key] >= 3){
				check = true;
                key1 = key;
				break;
			}
		}
		if(check){
			while(map[key1] >= 3){
				map[key1] -= 2;
				res -= 2;
			}
		}
	}
	return res;
};
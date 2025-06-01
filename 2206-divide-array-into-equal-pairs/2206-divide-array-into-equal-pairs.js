var divideArray = function(nums) {
	const map = {};
	for(let num of nums){
		map[num] = (map[num] || 0) + 1;
	}
	for(let value of Object.values(map)){
		if(value %2 == 1) return false;
	}
	return true;
};
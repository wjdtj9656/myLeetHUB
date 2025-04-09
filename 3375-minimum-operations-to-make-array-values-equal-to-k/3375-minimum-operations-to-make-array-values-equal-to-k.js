var minOperations = function(nums, k) {
	const set = new Set(nums);

	const temp = [...set];
    const arr = temp.sort((a,b)=>b-a);
	const len = arr.length-1;
	if(arr[len] < k){
		return -1;
	}
	for(let i=0; i<=len; i++){
		if(arr[i] <= k) return i;
	}
    return len+1;
};
var getHappyString = function(n, k) {
    let arr = [];
	let char = ['a','b','c'];
	const makeString = (index,str) =>{
		if(index == n){
			arr.push(str);
			return;
		}
		for(let i=0; i<3; i++){
			if(str.length > 0){
				if(str[str.length-1] == char[i]){
					continue;
				}
			}
            makeString(index+1,str+char[i]);
		}
	}
    makeString(0,"");
	return arr[k-1]? arr[k-1]: "";
};
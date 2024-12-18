	var finalPrices = function(prices) {
    const stack = [];
    for(let i=0; i<prices.length; i++){
        if(stack.length == 0){
            stack.push([i,prices[i]]);
        }else{
            while(stack.length > 0 && stack[stack.length-1][1] >= prices[i]){
                let [a,b] = stack.pop();
				prices[a] -= prices[i];
            }
			stack.push([i,prices[i]]);
        }
    }
	return prices
};

console.log(finalPrices([8,4,6,2,3]));
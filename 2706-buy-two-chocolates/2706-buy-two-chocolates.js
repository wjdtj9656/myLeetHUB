/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
    let a = prices[0];
    let b = prices[1];
    if(a+b > money){
        return money;
    }
    else{
        return money-(a+b);
    }
};

var ProductOfNumbers = function() {
    this.map ={};
    this.index = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.map[this.index++] = num;
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let sum = 1;
    for(let i=this.index-1; i>=this.index-k; i--){
        sum = sum*this.map[i];
    }
    return sum;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
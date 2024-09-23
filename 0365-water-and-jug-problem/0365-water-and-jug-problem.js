/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    if(target > x+y) return false;
    if(target === 0) return true;

    const gcd =(a,b)=>{
        if(b>a){
            [a,b] = [b,a];
        }
        if(b==0){
            return a;
        }
        return gcd(a%b,b);
    }
    return target % gcd(x,y) ===0;
};
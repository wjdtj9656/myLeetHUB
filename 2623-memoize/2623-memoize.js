/**
 * @param {Function} fn
 */
function memoize(fn) {
    const map = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(map.has(key)){
            return map.get(key);
        }
        const result = fn.apply(this, args);
        map.set(key,result);
        
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
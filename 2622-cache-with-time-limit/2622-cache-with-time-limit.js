var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const ctime = Date.now();
    const etime =  ctime + duration;

    const already = key in this.cache && this.cache[key].etime > ctime;
    this.cache[key] = {value, etime};
    return already;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const ctime = Date.now();

    if(key in this.cache){
        const {value, etime}  =  this.cache[key];
        if(etime > ctime){
            return value;
        }else{
            delete this.cache[key];
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const ctime = Date.now();
    let cnt = 0;
    for(const key in this.cache){
        if(this.cache[key].etime > ctime){
            cnt++;
        }else{
            delete this.cache[key];
        }
    }
    return cnt;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
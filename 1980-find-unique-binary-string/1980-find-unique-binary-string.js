/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    let result ="";
    const search = (now) =>{
        if(now.length === n){
            if(!nums.includes(now)){
                result = now;
                return true;
            }
            return false;
        }
        if(search(now+"1")) return true;
        if(search(now+"0")) return true;
        return false;
    }
    search("");
    return result;
};
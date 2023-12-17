/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a,b)=>{
        let aNum = a.toString(2).split('').filter(v=>v==1);
        let bNum = b.toString(2).split('').filter(v=>v==1);
        if(aNum.length == bNum.length) return a-b;
        return aNum.length - bNum.length
    })
    return arr
};
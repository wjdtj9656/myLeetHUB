/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let str = ''
    let ans = 0
    let count = 0
    for(let i = 0;i < s.length;i++){
        s.charAt(i)
        for(let j = 0; j < arr.length; j++){
            if(s.charAt(i) == arr[j]){ 
                let temp = j + 1
                str += temp.toString()
            }
        }
    }
    for(let j = 0; j < k; j++){
        for(let i = 0; i < str.length;i++){
        ans += parseInt(str.charAt(i))
     }
     count = ans
     str = ans.toString()
     ans = 0
    }
    return count   
};
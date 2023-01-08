/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    n+="";
    let reverseNum = n.split('').reverse();
    if(reverseNum.includes('2') ||reverseNum.includes('3') || reverseNum.includes('4') || reverseNum.includes('5') || reverseNum.includes('7')) return false;
    for(let i=0; i<reverseNum.length; i++){
        if(reverseNum[i] ==='6') reverseNum[i] = '9';
        else if(reverseNum[i] === '9') reverseNum[i] = '6';
    }
    let num = Number(reverseNum.join(''));
    // console.log(n,num);
    return n==num? false:true;
};
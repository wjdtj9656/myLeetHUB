/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let num1 = 0;
    let num2 = 0;
    let str = String(num).split("");
    num2 = str[0];
    for(let i=0; i<str.length; i++){
        if(str[i] == '9'){
            continue;
        }else{
            num1 = i;
            break;
        }
    }
    num1 = str[num1];
    let max = str.map((v)=>{
        if(v == num1){
            v = 9;
        }
        return v;
    })
    let min = str.map((v)=>{
        if(v==num2){
            v= 0;
        }
        return v;
    })

    return Number(max.join('')) - Number(min.join(''));
};
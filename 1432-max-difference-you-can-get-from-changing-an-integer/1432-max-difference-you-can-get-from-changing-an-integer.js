/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    let str = String(num).split("");
    let mainIndex = -1;
    let num1 = str.find(v=>v!='9');
    let num2 = str.find((v, index) => {
        if (index === 0) {
            mainIndex = 0;
            return v !== '1';
        } else {
            if(str[0] == '1'){
                mainIndex = 1;
                return v !== '1' && v !== '0';
            }
            else{
                mainIndex = 1;
                return v !== '0';
            }
        }
    });
    if(num1 != undefined){
        num1 = str.map(v=>v==num1? '9':v).join('');
    }else{
        num1 = num;
    }
    if(num2 != undefined){
        if(str[0] != 1){
            num2 = str.map(v=>v==num2? 1:v).join('');
        }else{
            num2 = str.map(v=>v==num2? 0:v).join('');
        }
    }else{
        num2 = num;
    }
    return Number(num1) - Number(num2);
};
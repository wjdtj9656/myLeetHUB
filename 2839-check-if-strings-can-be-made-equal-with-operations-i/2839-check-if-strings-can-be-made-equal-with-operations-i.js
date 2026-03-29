/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let arr1 ="";
    let arr2 ="";
    let arr3 ="";
    let arr4 ="";
    for(let i=0; i<s1.length; i++){
        if(i%2==0){
            arr1 += s1[i];
        }else{
            arr2 += s1[i];
        }
    }
    for(let i=0; i<s2.length; i++){
        if(i%2==0){
            arr3 += s2[i];
        }else{
            arr4 += s2[i];
        }
    }
    arr1 = arr1.split('').sort().join("");
    arr2 =arr2.split('').sort().join("");
    arr3 =arr3.split('').sort().join("");
    arr4 = arr4.split('').sort().join("");
    return arr1 == arr3 && arr2 ==arr4
};
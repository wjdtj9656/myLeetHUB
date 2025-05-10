/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let zero1 = false;
    let zerocnt1 = 0;
    let sum1 = nums1.reduce((a,b)=>{
        if(b==0) {
            zero1 = true;
            zerocnt1++;
        }
        return a+b;
    },0)

    let zero2 = false;
    let zerocnt2 = 0;
    let sum2 = nums2.reduce((a,b)=>{
        if(b==0) {
            zero2 = true;
            zerocnt2++;
        }
        return a+b;
    },0)
    sum1 += zerocnt1;
    sum2 += zerocnt2;
    if(sum1 == sum2){
        return sum1;
    }
    //console.log(sum1,sum2,zero1,zero2);
    if(zero1 && zero2){
        return Math.max(sum1,sum2);
    }else{
        if(!zero1 && !zero2) return -1;
        if(!zero1){
            if(sum1 < sum2){
                return -1;
            }
            else{
                return sum1;
            }
        }
        if(!zero2){
            if(sum1 > sum2){
                return -1;
            }
            else{
                return sum2;
            }
        }
    }
};
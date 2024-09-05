var arithmeticTriplets = function(nums, diff) {
    const len = nums.length;
    const arr = [];
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            if(nums[j] - nums[i] != diff) continue;
            let left = j+1;
            let right = len;
            const target = nums[j]+diff;
            while(left < right){
                let mid = (left+right)/2>>0;
                if(nums[mid] == target){
                    arr.push([i,j,mid]);
                    break;
                }
                else if(nums[mid] < target){
                    left = mid+1;
                }
                else{
                    right = mid;
                }
            }
        }
    }
    return arr.length;
};
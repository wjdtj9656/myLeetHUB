function maxSumOfThreeSubarrays(nums, k) {
    const n = nums.length;
    const sums = [];

    let cursum = 0;
    for(let i=0; i<k; i++){
        cursum += nums[i];
    }
    sums[0] = cursum;
    for(let i=1; i<n-k+1; i++){
        cursum = cursum - nums[i-1] + nums[i+k-1];
        sums[i] = cursum;
    }
    const n2 = sums.length;
    const left = new Array(n2).fill(0);
    let lindex = 0;
    for(let i=0; i<n2; i++){
        if(sums[i] > sums[lindex]){
            lindex = i;
        }
        left[i] = lindex;
    }
    const n3 = sums.length;
    const right = new Array(n3).fill(0);
    let rIndex = n3-1;
    for(let i=n2-1; i>=0; i--){
        if(sums[i] >= sums[rIndex]){
            rIndex = i;
        }
        right[i] = rIndex;
    }
    let maxTotal = 0;
    let answer = [0, 0, 0];
  
    for(let i=k; i<n2-k; i++){
        let lv = left[i-k];
        let rv = right[i+k];
        let total = sums[i] + sums[lv] + sums[rv];
        if(total > maxTotal){
            maxTotal = total;
            answer = [lv,i,rv];
        }
    }
    return answer;
}
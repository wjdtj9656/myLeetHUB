/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges 
 * @return {number}
 */
function maximumValueSum(nums, k, edges) {
    const n = nums.length;
    let sumA = 0;
    let sumPos = 0;
    let posCount = 0;
    let minPos = Infinity;
    let maxNeg = -Infinity;
    let zeroExists = false;
    
    for (let i = 0; i < n; i++) {
        const A = nums[i];
        const B = A ^ k;
        const diff = B - A;
        sumA += A;
        
        if (diff > 0) {
            posCount++;
            sumPos += diff;
            if (diff < minPos) minPos = diff;
        } else if (diff < 0) {
            if (diff > maxNeg) maxNeg = diff;
        } else {
            zeroExists = true;
        }
    }
    
    if (posCount % 2 === 0 || zeroExists) {
        return sumA + sumPos;
    }
    
    const penalty = Math.min(minPos, -maxNeg);
    return sumA + sumPos - penalty;
}
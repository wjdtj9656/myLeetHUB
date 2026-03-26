/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} dist
 * @return {number}
 */
var minimumCost = function(nums, k, dist) {
    const n = nums.length;
    const L = new MinPriorityQueue({ compare: (a, b) => b[0] - a[0] });
    const R = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });
    
    let sum = 0;
    const target = k - 1;
    const inL = new Array(n).fill(false);
    let cntL = 0;
    
    const prune = (pq, limit) => {
        while (pq.size() > 0 && pq.front()[1] <= limit) {
            pq.dequeue();
        }
    };

    const balance = (limit) => {
        while (cntL < target) {
            prune(R, limit);
            if (R.size() === 0) break;
            const [val, idx] = R.dequeue();
            L.enqueue([val, idx]);
            sum += val;
            inL[idx] = true;
            cntL++;
        }
        
        while (true) {
            prune(L, limit);
            prune(R, limit);
            if (L.size() === 0 || R.size() === 0) break;
            
            const topL = L.front();
            const topR = R.front();
            
            if (topL[0] > topR[0]) {
                L.dequeue();
                sum -= topL[0];
                inL[topL[1]] = false;
                cntL--;
                R.enqueue(topL);
                
                R.dequeue();
                sum += topR[0];
                inL[topR[1]] = true;
                cntL++;
                L.enqueue(topR);
            } else {
                break;
            }
        }
    };

    for (let i = 1; i <= dist + 1; i++) {
         if (i < n) R.enqueue([nums[i], i]);
    }
    balance(-1);
    
    let minSum = sum;
    
    for (let i = dist + 2; i < n; i++) {
        const outIdx = i - dist - 1;
        if (inL[outIdx]) {
            sum -= nums[outIdx];
            cntL--;
            inL[outIdx] = false;
        }
        
        R.enqueue([nums[i], i]);
        balance(outIdx);
        minSum = Math.min(minSum, sum);
    }
    
    return minSum + nums[0];
};
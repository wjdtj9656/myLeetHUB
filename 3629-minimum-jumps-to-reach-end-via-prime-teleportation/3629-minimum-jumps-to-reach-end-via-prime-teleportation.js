/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    const maxVal = Math.max(...nums);
    
    const spf = new Int32Array(maxVal + 1);
    for (let i = 2; i <= maxVal; i++) spf[i] = i;
    for (let i = 2; i * i <= maxVal; i++) {
        if (spf[i] === i) {
            for (let j = i * i; j <= maxVal; j += i) {
                if (spf[j] === j) spf[j] = i;
            }
        }
    }

    const isPrime = (num) => num >= 2 && spf[num] === num;

    const validPrimes = new Set();
    for (let i = 0; i < n; i++) {
        if (isPrime(nums[i])) {
            validPrimes.add(nums[i]);
        }
    }

    const primeToIndices = new Map();
    for (let p of validPrimes) {
        primeToIndices.set(p, []);
    }

    for (let i = 0; i < n; i++) {
        let val = nums[i];
        if (val < 2) continue; 
        
        let factors = [];
        while (val > 1) {
            let p = spf[val];
            factors.push(p);
            while (val % p === 0) {
                val /= p;
            }
        }
        
        for (let p of factors) {
            if (primeToIndices.has(p)) {
                primeToIndices.get(p).push(i);
            }
        }
    }

    const queue = [0];
    let head = 0; 
    const dist = new Int32Array(n).fill(-1);
    dist[0] = 0;
    
    const visitedPrimes = new Set();

    while (head < queue.length) {
        let u = queue[head++];
        let d = dist[u];

        if (u === n - 1) return d;

        const neighbors = [u + 1, u - 1];
        for (let v of neighbors) {
            if (v >= 0 && v < n && dist[v] === -1) {
                dist[v] = d + 1;
                if (v === n - 1) return dist[v];
                queue.push(v);
            }
        }

        if (isPrime(nums[u]) && !visitedPrimes.has(nums[u])) {
            let p = nums[u];
            visitedPrimes.add(p);
            
            let multiples = primeToIndices.get(p);
            if (multiples) {
                for (let i = 0; i < multiples.length; i++) {
                    let v = multiples[i];
                    if (dist[v] === -1) {
                        dist[v] = d + 1;
                        if (v === n - 1) return dist[v];
                        queue.push(v);
                    }
                }
            }
        }
    }

    return -1; 
}
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    let minTime = workerTimes[0];
    for (let i = 1; i < workerTimes.length; i++) {
        if (workerTimes[i] < minTime) {
            minTime = workerTimes[i];
        }
    }

    let left = 1n;
    let right = BigInt(minTime) * BigInt(mountainHeight) * BigInt(mountainHeight + 1) / 2n;
    let ans = right;

    while (left <= right) {
        let mid = (left + right) / 2n;
        let currentHeight = 0;

        for (let i = 0; i < workerTimes.length; i++) {
            let t = BigInt(workerTimes[i]);
            let l = 1n;
            let r = BigInt(mountainHeight);
            let maxH = 0n;

            while (l <= r) {
                let m = (l + r) / 2n;
                if (t * m * (m + 1n) / 2n <= mid) {
                    maxH = m;
                    l = m + 1n;
                } else {
                    r = m - 1n;
                }
            }
            
            currentHeight += Number(maxH);
            if (currentHeight >= mountainHeight) {
                break;
            }
        }

        if (currentHeight >= mountainHeight) {
            ans = mid;
            right = mid - 1n;
        } else {
            left = mid + 1n;
        }
    }

    return Number(ans);
};
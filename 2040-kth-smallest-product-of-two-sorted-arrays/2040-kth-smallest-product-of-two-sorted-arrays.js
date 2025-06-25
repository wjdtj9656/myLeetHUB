function kthSmallestProduct(nums1, nums2, k) {
    const n1 = nums1.length, n2 = nums2.length;
    let candidates = [
        nums1[0] * nums2[0],
        nums1[0] * nums2[n2-1],
        nums1[n1-1] * nums2[0],
        nums1[n1-1] * nums2[n2-1]
    ];
    let low = Math.min(...candidates), high = Math.max(...candidates);

    function lowerBound(arr, target) {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >>> 1;
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }
    function upperBound(arr, target) {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >>> 1;
            if (arr[mid] <= target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    function countLE(mid) {
        let cnt = 0;
        for (let x of nums1) {
            if (x > 0) {
                const t = Math.floor(mid / x);
                cnt += upperBound(nums2, t);
            } else if (x < 0) {
                const t = Math.ceil(mid / x);
                cnt += n2 - lowerBound(nums2, t);
            } else {
                if (mid >= 0) cnt += n2;
            }
        }
        return cnt;
    }

    while (low < high) {
        const mid = low + ((high - low) >>> 1);
        if (countLE(mid) >= k) high = mid;
        else low = mid + 1;
    }

    return low;
}

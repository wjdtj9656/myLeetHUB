const maxWalls = function(robots, distance, walls) {
    let n = robots.length;
    let R = new Array(n);
    for (let i = 0; i < n; i++) R[i] = [robots[i], distance[i]];
    R.sort((a, b) => a[0] - b[0]);
    walls.sort((a, b) => a - b);

    let base_ans = 0;
    let W = [];
    let r_idx = 0;
    for (let i = 0; i < walls.length; i++) {
        let w = walls[i];
        while (r_idx < n && R[r_idx][0] < w) r_idx++;
        if (r_idx < n && R[r_idx][0] === w) {
            base_ans++;
        } else {
            W.push(w);
        }
    }

    let m = W.length;
    let seg_bounds = new Array(n + 1);
    let w_idx = 0;
    for (let i = 0; i <= n; i++) {
        let right_bound = i === n ? Infinity : R[i][0];
        let start = w_idx;
        while (w_idx < m && W[w_idx] < right_bound) {
            w_idx++;
        }
        seg_bounds[i] = { start: start, end: w_idx };
    }

    let lowerBound = function(arr, target, start, end) {
        let l = start, r = end;
        while (l < r) {
            let mid = (l + r) >> 1;
            if (arr[mid] >= target) r = mid;
            else l = mid + 1;
        }
        return l;
    };

    let upperBound = function(arr, target, start, end) {
        let l = start, r = end;
        while (l < r) {
            let mid = (l + r) >> 1;
            if (arr[mid] > target) r = mid;
            else l = mid + 1;
        }
        return l;
    };

    let l_val = new Int32Array(n);
    let r_val = new Int32Array(n);
    let both_val = new Int32Array(n > 0 ? n - 1 : 0);

    for (let i = 0; i < n; i++) {
        let seg_i = seg_bounds[i];
        let min_reach = R[i][0] - R[i][1];
        l_val[i] = seg_i.end - lowerBound(W, min_reach, seg_i.start, seg_i.end);

        let seg_next = seg_bounds[i + 1];
        let max_reach = R[i][0] + R[i][1];
        r_val[i] = upperBound(W, max_reach, seg_next.start, seg_next.end) - seg_next.start;
    }

    for (let i = 0; i < n - 1; i++) {
        let seg = seg_bounds[i + 1];
        let r_reach = R[i][0] + R[i][1];
        let l_reach = R[i + 1][0] - R[i + 1][1];

        let ub = upperBound(W, r_reach, seg.start, seg.end);
        let lb = lowerBound(W, l_reach, seg.start, seg.end);

        if (ub >= lb) {
            both_val[i] = seg.end - seg.start;
        } else {
            both_val[i] = (ub - seg.start) + (seg.end - lb);
        }
    }

    let dp0 = l_val[0];
    let dp1 = 0;

    for (let i = 1; i < n; i++) {
        let new_dp0 = Math.max(dp0 + l_val[i], dp1 + both_val[i - 1]);
        let new_dp1 = Math.max(dp0, dp1 + r_val[i - 1]);
        dp0 = new_dp0;
        dp1 = new_dp1;
    }

    return Math.max(dp0, dp1 + r_val[n - 1]) + base_ans;
};
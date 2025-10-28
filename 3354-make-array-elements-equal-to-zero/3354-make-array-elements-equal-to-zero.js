function countValidSelections(nums) {
  const n = nums.length;
  const zeros = [];
  for (let i = 0; i < n; i++) if (nums[i] === 0) zeros.push(i);
  let ans = 0;
  for (const start of zeros) {
    for (const d of [-1, 1]) {
      const a = nums.slice();
      let curr = start;
      let dir = d;
      while (curr >= 0 && curr < n) {
        if (a[curr] === 0) {
          curr += dir;
        } else {
          a[curr]--;
          dir = -dir;
          curr += dir;
        }
      }
      let ok = true;
      for (let i = 0; i < n; i++) if (a[i] !== 0) { ok = false; break; }
      if (ok) ans++;
    }
  }
  return ans;
}

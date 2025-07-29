function smallestSubarrays(nums) {
  const n = nums.length;
  const answer = new Array(n);
  const next = new Array(31).fill(Infinity);
  for (let i = n - 1; i >= 0; i--) {
    let v = nums[i];
    for (let b = 0; b < 31; b++) {
      if (v & (1 << b)) next[b] = i;
    }
    let far = i;
    for (let b = 0; b < 31; b++) {
      if (next[b] !== Infinity) far = far > next[b] ? far : next[b];
    }
    answer[i] = far - i + 1;
  }
  return answer;
}

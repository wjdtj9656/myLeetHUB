function maxFreeTime(eventTime, k, startTime, endTime) {
  const n = startTime.length;
  const s = Array(n + 2), e = Array(n + 2);
  s[0] = 0; e[0] = 0;
  for (let i = 0; i < n; i++) {
    s[i + 1] = startTime[i];
    e[i + 1] = endTime[i];
  }
  s[n + 1] = eventTime;
  e[n + 1] = eventTime;
  const durSum = Array(n + 1);
  durSum[0] = 0;
  for (let i = 1; i <= n; i++) {
    durSum[i] = durSum[i - 1] + (e[i] - s[i]);
  }
  const A = Array(n + 2), B = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    B[i] = e[i] - durSum[i];
  }
  for (let j = 1; j <= n; j++) {
    A[j] = s[j] - durSum[j - 1];
  }
  A[n + 1] = s[n + 1] - durSum[n];
  const deque = [0];
  let maxFree = 0;
  for (let j = 1; j <= n + 1; j++) {
    const R = j - 1;
    if (R > 0) {
      while (deque.length && B[R] <= B[deque[deque.length - 1]]) {
        deque.pop();
      }
      deque.push(R);
    }
    let L = j - k - 1;
    if (L < 0) L = 0;
    while (deque.length && deque[0] < L) {
      deque.shift();
    }
    const freeLen = A[j] - B[deque[0]];
    if (freeLen > maxFree) {
      maxFree = freeLen;
    }
  }
  return maxFree;
}
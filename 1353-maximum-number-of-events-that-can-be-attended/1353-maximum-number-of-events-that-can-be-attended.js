function maxEvents(events) {
  events.sort((a, b) => a[0] - b[0]);
  const heap = [];
  let i = 0, day = 0, res = 0, n = events.length;

  while (i < n || heap.length) {
    if (!heap.length) {
      day = events[i][0];
    }

    while (i < n && events[i][0] <= day) {
      push(events[i][1]);
      i++;
    }

    while (heap.length && heap[0] < day) {
      pop();
    }

    if (heap.length) {
      pop();
      res++;
      day++;
    }
  }

  return res;

  function push(x) {
    heap.push(x);
    let idx = heap.length - 1;
    while (idx > 0) {
      let p = (idx - 1) >> 1;
      if (heap[p] <= heap[idx]) break;
      [heap[p], heap[idx]] = [heap[idx], heap[p]];
      idx = p;
    }
  }

  function pop() {
    const ret = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let idx = 0;
      while (true) {
        let l = idx * 2 + 1, r = idx * 2 + 2, minIdx = idx;
        if (l < heap.length && heap[l] < heap[minIdx]) minIdx = l;
        if (r < heap.length && heap[r] < heap[minIdx]) minIdx = r;
        if (minIdx === idx) break;
        [heap[idx], heap[minIdx]] = [heap[minIdx], heap[idx]];
        idx = minIdx;
      }
    }
    return ret;
  }
}
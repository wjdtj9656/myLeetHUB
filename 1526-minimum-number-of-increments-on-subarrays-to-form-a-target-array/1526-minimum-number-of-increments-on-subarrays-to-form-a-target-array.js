function minNumberOperations(target) {
  let ops = 0, prev = 0;
  for (let i = 0; i < target.length; i++) {
    const diff = target[i] - prev;
    if (diff > 0) ops += diff;
    prev = target[i];
  }
  return ops;
}

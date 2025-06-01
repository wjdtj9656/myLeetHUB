function numberOfArrays(differences, lower, upper) {
  let minOffset = 0, maxOffset = 0, cur = 0;
  for (let d of differences) {
    cur += d;
    if (cur < minOffset) minOffset = cur;
    if (cur > maxOffset) maxOffset = cur;
  }
  const minStart = lower - minOffset;
  const maxStart = upper - maxOffset;
  return Math.max(0, maxStart - minStart + 1);
}

function maxFreeTime(eventTime, startTime, endTime) {
  const n = startTime.length;
  const meetings = [];
  for (let i = 0; i < n; i++) meetings.push([startTime[i], endTime[i]]);
  meetings.sort((a, b) => a[0] - b[0]);

  const gaps = [];
  let maxFree = 0;

  if (meetings[0][0] > 0) {
    gaps.push([0, meetings[0][0]]);
    maxFree = meetings[0][0];
  }

  for (let i = 1; i < n; i++) {
    if (meetings[i][0] > meetings[i - 1][1]) {
      const gap = [meetings[i - 1][1], meetings[i][0]];
      gaps.push(gap);
      maxFree = Math.max(maxFree, gap[1] - gap[0]);
    }
  }

  if (meetings[n - 1][1] < eventTime) {
    const gap = [meetings[n - 1][1], eventTime];
    gaps.push(gap);
    maxFree = Math.max(maxFree, gap[1] - gap[0]);
  }

  for (let i = 0; i < n; i++) {
    const dur = meetings[i][1] - meetings[i][0];

    for (const [gapStart, gapEnd] of gaps) {
      if (gapEnd - gapStart >= dur) {
        const newStart = gapStart;
        const newEnd = newStart + dur;

        let prevEnd = 0;
        let freeTime = 0;
        for (let j = 0; j < n; j++) {
          if (j === i) continue;

          const s = meetings[j][0];
          const e = meetings[j][1];

          if (s > prevEnd) {
            freeTime += s - prevEnd;
          }

          prevEnd = Math.max(prevEnd, e);
        }

        if (newStart > prevEnd) {
          freeTime += newStart - prevEnd;
        }
        prevEnd = Math.max(prevEnd, newEnd);
        freeTime += Math.max(0, eventTime - prevEnd);

        maxFree = Math.max(maxFree, freeTime);
      }
    }
  }

  return maxFree;
}

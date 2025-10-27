var numberOfBeams = function(bank) {
  let prev = 0, res = 0;
  for (const row of bank) {
    let cnt = 0;
    for (let i = 0; i < row.length; i++) if (row[i] === '1') cnt++;
    if (cnt > 0) {
      res += prev * cnt;
      prev = cnt;
    }
  }
  return res;
};

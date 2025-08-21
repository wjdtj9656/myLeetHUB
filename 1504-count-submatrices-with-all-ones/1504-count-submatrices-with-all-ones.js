function numSubmat(mat) {
  const m = mat.length, n = mat[0].length;
  const h = new Array(n).fill(0);
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) h[j] = mat[i][j] ? h[j] + 1 : 0;
    const st = [];
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (h[j] === 0) { st.length = 0; sum = 0; continue; }
      let cnt = 1;
      while (st.length && st[st.length - 1][0] >= h[j]) {
        const [hh, cc] = st.pop();
        sum -= hh * cc;
        cnt += cc;
      }
      sum += h[j] * cnt;
      st.push([h[j], cnt]);
      ans += sum;
    }
  }
  return ans;
}

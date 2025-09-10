function minimumTeachings(n, languages, friendships) {
  const langSets = languages.map(l => new Set(l));
  const need = new Set();
  const share = (a, b) => {
    if (a.size > b.size) [a, b] = [b, a];
    for (const x of a) if (b.has(x)) return true;
    return false;
  };
  for (const [u, v] of friendships) {
    const A = langSets[u - 1], B = langSets[v - 1];
    if (!share(A, B)) {
      need.add(u - 1);
      need.add(v - 1);
    }
  }
  if (need.size === 0) return 0;
  let ans = Infinity;
  for (let l = 1; l <= n; l++) {
    let cnt = 0;
    for (const u of need) if (!langSets[u].has(l)) cnt++;
    if (cnt < ans) ans = cnt;
  }
  return ans;
}

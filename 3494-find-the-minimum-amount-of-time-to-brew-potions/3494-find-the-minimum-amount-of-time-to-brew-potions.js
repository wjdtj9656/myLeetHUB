function minTime(skill, mana) {
  const n = skill.length, m = mana.length;
  const pref = new Array(n + 1);
  pref[0] = 0;
  for (let i = 0; i < n; i++) pref[i + 1] = pref[i] + skill[i];
  let t = 0;
  for (let j = 1; j < m; j++) {
    let best = 0;
    const prev = mana[j - 1], bj = mana[j];
    for (let i = 0; i < n; i++) {
      const v = skill[i] * prev + pref[i] * (prev - bj);
      if (v > best) best = v;
    }
    t += best;
  }
  return t + pref[n] * mana[m - 1];
}

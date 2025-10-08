function successfulPairs(spells, potions, success) {
  potions.sort((a,b)=>a-b);
  const m = potions.length, res = new Array(spells.length);
  for (let i = 0; i < spells.length; i++) {
    let l = 0, r = m - 1, ans = m;
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (spells[i] * potions[mid] >= success) { ans = mid; r = mid - 1; }
      else l = mid + 1;
    }
    res[i] = m - ans;
  }
  return res;
}

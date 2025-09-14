function spellchecker(wordlist, queries) {
  const exact = new Set(wordlist);
  const lowerMap = new Map();
  const vowelMap = new Map();
  const devowel = s => s.replace(/[aeiou]/g, "*");
  for (const w of wordlist) {
    const lw = w.toLowerCase();
    if (!lowerMap.has(lw)) lowerMap.set(lw, w);
    const vw = devowel(lw);
    if (!vowelMap.has(vw)) vowelMap.set(vw, w);
  }
  const res = [];
  for (const q of queries) {
    if (exact.has(q)) {
      res.push(q);
      continue;
    }
    const lq = q.toLowerCase();
    if (lowerMap.has(lq)) {
      res.push(lowerMap.get(lq));
      continue;
    }
    const vq = devowel(lq);
    if (vowelMap.has(vq)) {
      res.push(vowelMap.get(vq));
      continue;
    }
    res.push("");
  }
  return res;
}

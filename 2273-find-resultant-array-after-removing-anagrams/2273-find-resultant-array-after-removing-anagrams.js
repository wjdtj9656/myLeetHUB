var removeAnagrams = function(words) {
  const res = [];
  let prev = "";
  for (const w of words) {
    const key = [...w].sort().join("");
    if (key !== prev) {
      res.push(w);
      prev = key;
    }
  }
  return res;
};

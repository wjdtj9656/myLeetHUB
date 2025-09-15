var canBeTypedWords = function(text, brokenLetters) {
  const broken = new Set(brokenLetters);
  const words = text.split(" ");
  let count = 0;

  for (const word of words) {
    let ok = true;
    for (const ch of word) {
      if (broken.has(ch)) {
        ok = false;
        break;
      }
    }
    if (ok) count++;
  }

  return count;
};

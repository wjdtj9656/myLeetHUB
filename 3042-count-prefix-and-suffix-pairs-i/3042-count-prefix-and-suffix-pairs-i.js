function countPrefixSuffixPairs(words) {
  function isPrefixAndSuffix(str1, str2) {
    if (str1.length > str2.length) return false;

    if (!str2.startsWith(str1)) {
      return false;
    }
    
    if (!str2.endsWith(str1)) {
      return false;
    }

    return true;
  }

  let count = 0;
  const n = words.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++;
      }
    }
  }

  return count;
}
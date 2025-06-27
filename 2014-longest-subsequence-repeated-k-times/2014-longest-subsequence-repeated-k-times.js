function longestSubsequenceRepeatedK(s, k) {
  const n = s.length;
  const next = Array.from({ length: n + 1 }, () => new Array(26).fill(n));
  for (let i = n - 1; i >= 0; i--) {
    for (let c = 0; c < 26; c++) {
      next[i][c] = next[i + 1][c];
    }
    next[i][s.charCodeAt(i) - 97] = i;
  }
  const maxLen = Math.floor(n / k);
  function canRepeat(seq) {
    let pos = 0;
    for (let t = 0; t < k; t++) {
      for (let ch of seq) {
        const c = ch.charCodeAt(0) - 97;
        if (next[pos][c] === n) return false;
        pos = next[pos][c] + 1;
      }
    }
    return true;
  }
  function dfs(prefix, targetLen) {
    if (prefix.length === targetLen) {
      return prefix;
    }
    for (let c = 25; c >= 0; c--) {
      const ch = String.fromCharCode(97 + c);
      const newPref = prefix + ch;
      if (canRepeat(newPref)) {
        const res = dfs(newPref, targetLen);
        if (res !== null) return res;
      }
    }
    return null;
  }
  for (let L = maxLen; L >= 1; L--) {
    const answer = dfs("", L);
    if (answer !== null) {
      return answer;
    }
  }
  return "";
}

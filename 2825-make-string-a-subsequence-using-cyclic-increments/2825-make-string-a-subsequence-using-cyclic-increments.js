function canMakeSubsequence(str1, str2) {
  let i = 0; 
  let j = 0; 
  const n = str1.length;
  const m = str2.length;

  while (i < n && j < m) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      const incrementedChar =
        str1[i] === 'z' ? 'a' : String.fromCharCode(str1.charCodeAt(i) + 1);
      if (incrementedChar === str2[j]) {
        i++;
        j++;
      } else {
        i++;
      }
    }
  }

  return j === m;
}
function isValid(word) {
  if (word.length < 3) return false;
  if (!/^[A-Za-z0-9]+$/.test(word)) return false;
  const vowelRegex = /[aeiouAEIOU]/;
  if (!vowelRegex.test(word)) return false;
  if (![...word].some(ch => /[A-Za-z]/.test(ch) && !vowelRegex.test(ch))) return false;
  return true;
}
function minimumDeletions(s) {
  let deletions = 0;
  let bCount = 0;

  for (const char of s) {
    if (char === 'b') {
      bCount++;
    } else {
      deletions = Math.min(deletions + 1, bCount);
    }
  }

  return deletions;
}
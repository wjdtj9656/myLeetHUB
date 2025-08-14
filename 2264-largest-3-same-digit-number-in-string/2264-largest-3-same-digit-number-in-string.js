var largestGoodInteger = function (num) {
  let best = "";
  for (let i = 0; i + 2 < num.length; i++) {
    const a = num[i];
    if (a === num[i + 1] && a === num[i + 2]) {
      const s = a + a + a;
      if (s > best) best = s; 
    }
  }
  return best;
};

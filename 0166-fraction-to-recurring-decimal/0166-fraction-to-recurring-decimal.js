function fractionToDecimal(numerator, denominator) {
  if (numerator === 0) return "0";
  const sign = (numerator < 0) ^ (denominator < 0) ? "-" : "";
  let n = Math.abs(numerator), d = Math.abs(denominator);
  const intPart = Math.floor(n / d);
  let rem = n % d;
  if (rem === 0) return sign + String(intPart);
  const frac = [];
  const seen = new Map();
  while (rem !== 0) {
    if (seen.has(rem)) {
      const i = seen.get(rem);
      const non = frac.slice(0, i).join("");
      const rep = frac.slice(i).join("");
      return sign + intPart + "." + non + "(" + rep + ")";
    }
    seen.set(rem, frac.length);
    rem *= 10;
    frac.push(String(Math.floor(rem / d)));
    rem %= d;
  }
  return sign + intPart + "." + frac.join("");
}

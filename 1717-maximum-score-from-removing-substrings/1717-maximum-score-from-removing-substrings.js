function maximumGain(s, x, y) {
  let score = 0;
  if (x > y) {
    const stack1 = [];
    for (const ch of s) {
      if (ch === 'b' && stack1.length && stack1[stack1.length - 1] === 'a') {
        stack1.pop();
        score += x;
      } else {
        stack1.push(ch);
      }
    }
    const stack2 = [];
    for (const ch of stack1) {
      if (ch === 'a' && stack2.length && stack2[stack2.length - 1] === 'b') {
        stack2.pop();
        score += y;
      } else {
        stack2.push(ch);
      }
    }
  } else {
    const stack1 = [];
    for (const ch of s) {
      if (ch === 'a' && stack1.length && stack1[stack1.length - 1] === 'b') {
        stack1.pop();
        score += y;
      } else {
        stack1.push(ch);
      }
    }
    const stack2 = [];
    for (const ch of stack1) {
      if (ch === 'b' && stack2.length && stack2[stack2.length - 1] === 'a') {
        stack2.pop();
        score += x;
      } else {
        stack2.push(ch);
      }
    }
  }
  return score;
}

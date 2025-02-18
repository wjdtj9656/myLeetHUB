function smallestNumber(pattern) {
  let result = "";
  const stack = [];
  let num = 1;
  
  for (let i = 0; i <= pattern.length; i++) {
    stack.push(num);
    num++;
    
    if (i === pattern.length || pattern[i] === 'I') {
      while (stack.length > 0) {
        result += stack.pop();
      }
    }
  }
  
  return result;
}
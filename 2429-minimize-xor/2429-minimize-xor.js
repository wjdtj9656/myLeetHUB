function minimizeXor(num1, num2) {
  const c1 = countSetBits(num1);  // num1의 1비트 개수
  const c2 = countSetBits(num2);  // num2의 1비트 개수

  const ones = [];
  const zeros = [];
  for (let bit = 0; bit < 31; bit++) {
    if ((num1 >> bit) & 1) {
      ones.push(bit);  // bit번째 위치가 1
    } else {
      zeros.push(bit); // bit번째 위치가 0
    }
  }

  let x = 0;

  if (c2 === c1) {
    x = num1;
  } else if (c2 < c1) {
    const removeCount = c1 - c2;
    const keptBits = ones.slice(removeCount); 
    for (let bitPos of keptBits) {
      x |= (1 << bitPos);
    }
  } else {    for (let bitPos of ones) {
      x |= (1 << bitPos);
    }
    let need = c2 - c1;
    for (let i = 0; i < need; i++) {
      x |= (1 << zeros[i]);
    }
  }

  return x;
}

function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    n &= (n - 1);
    count++;
  }
  return count;
}

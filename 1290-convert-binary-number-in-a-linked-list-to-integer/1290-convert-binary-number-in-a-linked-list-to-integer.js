var getDecimalValue = function(head) {
  const bits = [];
  while (head) {
    bits.push(head.val);
    head = head.next;
  }
  const binStr = bits.join('');
  return parseInt(binStr, 2);
};
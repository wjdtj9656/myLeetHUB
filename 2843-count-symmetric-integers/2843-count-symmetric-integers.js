/**

 * 
 * @param {number} low 
 * @param {number} high 
 * @returns {number} 
 */
function countSymmetricIntegers(low, high) {
  let count = 0;

  for (let num = low; num <= high; num++) {
    const strNum = num.toString();

    if (strNum.length % 2 !== 0) continue;

    const half = strNum.length / 2;
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i < half; i++) {
      sumLeft += parseInt(strNum[i], 10);
      sumRight += parseInt(strNum[i + half], 10);
    }

    if (sumLeft === sumRight) {
      count++;
    }
  }
  return count;
}
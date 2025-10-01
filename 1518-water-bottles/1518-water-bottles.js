function numWaterBottles(numBottles, numExchange) {
  let drunk = 0;
  let empty = 0;
  let full = numBottles;

  while (full > 0 || empty >= numExchange) {
    drunk += full;
    empty += full;
    full = 0;

    const gained = Math.floor(empty / numExchange);
    const rem = empty % numExchange;
    full = gained;
    empty = rem;
  }

  return drunk;
}
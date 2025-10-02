function maxBottlesDrunk(numBottles, numExchange) {
  let full = numBottles, empty = 0, cost = numExchange, drank = 0;
  while (true) {
    if (full === 0 && empty < cost) break;
    if (full > 0) {
      drank += full;
      empty += full;
      full = 0;
    }
    if (empty >= cost) {
      empty -= cost;
      full += 1;
      cost += 1;
    }
  }
  return drank;
}

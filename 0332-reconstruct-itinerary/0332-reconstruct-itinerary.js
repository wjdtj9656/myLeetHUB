/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary(tickets) {
  const flightMap = new Map();
  const visitBitmap = new Map();
  let flights = 0;
  let result = null;

  for (const ticket of tickets) {
    const [origin, dest] = ticket;
    if (flightMap.has(origin)) {
      flightMap.get(origin).push(dest);
    } else {
      flightMap.set(origin, [dest]);
    }
  }

  for (const [origin, destinations] of flightMap.entries()) {
    destinations.sort();
    visitBitmap.set(origin, new Array(destinations.length).fill(false));
  }

  flights = tickets.length;
  const route = ['JFK'];

  function backtracking(origin, route) {
    if (route.length === flights + 1) {
      result = [...route];
      return true;
    }

    if (!flightMap.has(origin)) return false;

    const bitmap = visitBitmap.get(origin);

    for (let i = 0; i < flightMap.get(origin).length; i++) {
      const dest = flightMap.get(origin)[i];
      if (!bitmap[i]) {
        bitmap[i] = true;
        route.push(dest);
        const ret = backtracking(dest, route);
        route.pop();
        bitmap[i] = false;

        if (ret) return true;
      }
    }

    return false;
  }

  backtracking('JFK', route);
  return result;
}
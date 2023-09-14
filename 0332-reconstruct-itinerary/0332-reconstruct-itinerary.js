/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary(tickets) {
  const map = new Map();
  const visit = new Map();

  for(let i=0; i<tickets.length; i++){
    if(map.has(tickets[i][0])){
      map.get(tickets[i][0]).push(tickets[i][1]);
    }
    else{
      map.set(tickets[i][0],[tickets[i][1]]);
    }
  }
  for(let [origin, dest] of map.entries()){
    dest.sort();
    visit.set(origin,new Array(dest.length).fill(false));
  }

  let result;
  let flight = tickets.length;

  const backtracking = (origin, route) =>{
    if(route.length === flight+1){
      result = [...route];
      return true;
    }

    if(!visit.has(origin)) return false;

    const nowVisit = visit.get(origin);
    for(let i=0; i<map.get(origin).length; i++){
      const dest = map.get(origin)[i];
      if(!nowVisit[i]){
        nowVisit[i] = true;
        route.push(dest);
        let res = backtracking(dest,route);
        route.pop();
        nowVisit[i] = false;
        if(res) return true;
      }
    }
    return false;
  }
  backtracking('JFK',['JFK']);
  return result;
}
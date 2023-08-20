/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visit = new Set([0]);
    const len = rooms.length;
    let result = false;

    const search = (now) =>{
      if(result) return;
      if(visit.size == len){
        result = true;
        return;
      }
      for(let i=0; i<rooms[now].length; i++){
        if(visit.has(rooms[now][i])) continue;
        visit.add(rooms[now][i]);
        search(rooms[now][i]);
      }
    }

    for(let i=0; i<rooms[0].length; i++){
      if(visit.has(rooms[0][i])) continue;
      visit.add(rooms[0][i]);
      search(rooms[0][i])
    }
    return result;
};
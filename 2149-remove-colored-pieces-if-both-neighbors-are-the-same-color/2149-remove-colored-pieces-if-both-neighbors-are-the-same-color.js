/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    if(colors.length <= 2) return false;
    let now = 'A';
    let aValue = 0;
    let bValue = 0;
    let cnt = 0;
    for(let i=0; i<colors.length; i++){
        if(now === colors[i]) cnt++;
        else{
            now = colors[i];
            cnt = 1;
        }
        if(cnt >= 3){
            if(now == 'A') aValue++;
            else if(now == 'B') bValue++;
        }
    }
    return aValue <= bValue? false:true;
};
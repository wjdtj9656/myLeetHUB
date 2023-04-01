/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    const room = [];
    const cnt = [];
    let answer = 0;
    for(let i=0; i<n; i++){
        room[i] = -1;
        cnt[i] = 0;
    }
    meetings.sort((a,b)=>a[0] - b[0]);
    for(let i=0; i<meetings.length; i++){
        let start = meetings[i][0];
        let end = meetings[i][1];
        let earlyIndex = -1,earlyTime = Infinity, haveRoom = false;
        for(let j=0; j<n; j++){
            if(room[j] <= start){
                haveRoom=true;
                room[j] = end;
                cnt[j]++;
                break;
            }
            if(earlyTime > room[j]){
                earlyTime = room[j];
                earlyIndex = j;
            }
        }
        if(!haveRoom){
            room[earlyIndex] += (end-start);
            cnt[earlyIndex]++;
        } 
    }
    let max = 0;
    for(let i=0; i<n; i++){
        if(max < cnt[i]){
            max = cnt[i];
            answer = i;
        }
    }
    return answer;
};
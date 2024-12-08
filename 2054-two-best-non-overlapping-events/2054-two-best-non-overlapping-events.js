/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    const n = events.length;
    events.sort((a,b)=>a[1]-b[1]);
    const arr = new Array(n).fill(0);
    arr[0] = events[0][2];
    for (let i=1; i<n; i++) {
        arr[i] = Math.max(arr[i-1], events[i][2]);
    }
    const starts = events.map(e=>e[0]);
    const search = (target) =>{
        let left = 0;
        let right = n;
        while(left < right){
            const mid = Math.floor((left+right)/2);
            if(events[mid][1] < target){
                left = mid+1;
            }
            else{
                right = mid;
            }
        }
        return left;
    }
    let answer = 0;
    answer = Math.max(...arr);

    for(let i=0; i<n; i++){
        const nextIndex = search(events[i][0])-1;
        const val = events[i][2] + (nextIndex >= 0? arr[nextIndex] : 0);
        answer = Math.max(answer, val);
    }
    return answer;
}
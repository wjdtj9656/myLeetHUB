

class MyCalendar{
    constructor(){
        this.arr = [];
        return null;
    }
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let flag = false;
    if(this.arr.length == 0){
        this.arr.push([start,end]);
        return true;
    }
    else{
        if(this.arr[0][0] >= end){
            this.arr.push([start,end]);
            flag = true;
        }
        else if(this.arr[this.arr.length-1][1] <= start){
            this.arr.push([start,end]);
            flag = true;
        }
        else{
            for(let i=0; i<this.arr.length-1; i++){
                if(this.arr[i][1] <= start && this.arr[i+1][0] >= end){
                    this.arr.push([start,end]);
                    flag = true;
                    break;
                }
            }
        }
    }
    this.arr.sort((a,b)=>a[0]-b[0]);
    return flag
};
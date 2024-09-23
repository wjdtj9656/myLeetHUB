/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    let a = 0;
    let b = 0;
    let res = false;
    const dp = new Array(x+1).fill(Infinity).map(()=>new Array(y+1).fill(Infinity));
    const search = (a,b,cnt) =>{
        if(a == target || b == target || a+b==target){
            console.log(a,b)
            res = true;
            return cnt;
        }
        if(dp[a][b] < cnt){
            return;
        }
        else{
            dp[a][b] = cnt;
        }
        if(search(x,b,cnt+1))return true;
        if(search(a,y,cnt+1)) return true;
        if(search(0,b,cnt+1)) return true;
        if(search(a,0,cnt+1)) return true;
        if(search(Math.min(x,a+b),Math.max(0,b-(x-a)),cnt+1)) return true;
        if(search(Math.max(0,a-(y-b)),Math.min(y,a+b),cnt+1)) return true;
    }
    search(0,0,0);
    return res;
};
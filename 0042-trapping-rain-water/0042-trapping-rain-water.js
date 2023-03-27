/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    const len = height.length;
    const left = new Array(len);
    const right = new Array(len);
    let answer = 0;
    left[0] = height[0];
    right[len-1] = height[len-1];
    for(let i=1; i<len; i++){
        left[i] = Math.max(height[i], left[i-1]);
    }
    for(let i=len-2; i>=0; i--){
        right[i] = Math.max(height[i], right[i+1]);
    }
    for(let i=0; i<len; i++){
        const value = Math.min(left[i],right[i]) - height[i];
        if(value > 0) answer+=value;
    }
    return answer;
};
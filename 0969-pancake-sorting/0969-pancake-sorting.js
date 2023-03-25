/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    const result = [];
    const reverse = (arr,i,j) =>{
        while(i<j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    const panSort = (n) =>{
        if(n === 1) return;
        let max = 0;
        let maxIndex = 0;
        for(let i=0; i<n; i++){
            if(max < arr[i]){
                max = arr[i];
                maxIndex = i;
            }
        }
        reverse(arr,0,maxIndex);
        result.push(maxIndex+1);
        reverse(arr,0,n-1);
        result.push(n);
        panSort(n-1);
    }
    panSort(arr.length);
    return result;
};
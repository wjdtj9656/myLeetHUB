/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
  const n = original.length;  
  const arr = new Array(26).fill(Infinity).map(()=>new Array(26).fill(Infinity));
  let ans = 0;
  for(let i=0; i<26; i++){
    arr[i][i] = 0;
  }
  for(let i=0; i<n; i++){
    const a = original[i].charCodeAt(0)-97;
    const b = changed[i].charCodeAt(0)-97;
    arr[a][b]= Math.min(arr[a][b],cost[i]);
  }
  for(let k=0; k<26; k++){
    for(let a=0; a<26; a++){
      for(let b=0; b<26; b++){
        if(arr[a][b] > arr[a][k] + arr[k][b]){
          arr[a][b] = arr[a][k] + arr[k][b];
        }
      }
    }
  }
  for(let i=0; i<source.length; i++){
      let a = source[i].charCodeAt(0)-97;
      let b = target[i].charCodeAt(0)-97;
      if(arr[a][b] == Infinity) return -1;
      ans += arr[a][b];
    }
  return ans;
};

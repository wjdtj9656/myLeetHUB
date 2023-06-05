/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function(n, queries) {
    let sum = 0;
    let row = new Set(), col = new Set(), len = queries.length;
    for(let i=len-1; i>=0; i--){
        let [type, index, val] = queries[i];
        if(type){
            if(col.has(index)) continue;
            col.add(index);
            sum += val * (n - row.size);
        }
        else{
            if(row.has(index)) continue;
            row.add(index);
            sum += val * (n - col.size);
        }
    }
    return sum;
};
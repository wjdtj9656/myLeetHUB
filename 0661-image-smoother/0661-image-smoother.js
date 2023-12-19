/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const m = img.length;
    const n = img[0].length;
    const res = new Array(m).fill(0).map(()=>new Array(n).fill(0));

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            res[i][j] = smo(img, i, j);
        }
    }
    return res;
};

const smo = (img, x, y) =>{
    const m = img.length;
    const n = img[0].length;
    let sum = 0;
    let count = 0;

    for(let i=-1; i<=1; i++){
        for(let j=-1; j<=1; j++){
            const nx = x+ i;
            const ny = y+j;
            if(nx>=0 && nx<m && ny>=0 && ny<n){
                sum += img[nx][ny];
                ++count;
            }
        }
    }
    return Math.floor(sum / count);
}
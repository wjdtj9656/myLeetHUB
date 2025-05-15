/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let i1 = groups.indexOf(0);
    let i2 = groups.indexOf(1);
    let a = [i1];
    let b = [i2];
    if(i1 >= 0)
    for(let i=i1; i<groups.length; i++){
        if(groups[a[a.length-1]] !== groups[i]){
            a.push(i);
        }
    }
    else a = [];
    if(i2 >= 0)
    for(let i=i2; i<groups.length; i++){
        if(groups[b[b.length-1]] !== groups[i]){
            b.push(i);
        }
    }
    else b =[];
    const c = a.length > b.length ? a : b;
    const ans = [];
    for(let i=0; i<c.length; i++){
        ans.push(words[c[i]]);
    }
    return ans;
};
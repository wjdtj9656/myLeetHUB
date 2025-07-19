/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder = folder.sort((a,b)=>a.length - b.length);
    const set = new Set();
    for(let val of folder){
        const arr = [...set];
        let flag = true;
        for(let i=0; i<arr.length; i++){
            if(val.startsWith(arr[i]+"/")){
                flag = false
                break;
            }
        }
        if(flag) set.add(val);
    }
    return [...set]
};
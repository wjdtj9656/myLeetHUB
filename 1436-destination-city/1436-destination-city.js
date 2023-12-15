/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const set = new Set();
    for(let path of paths){
        let [start,end] = path;
        set.add(start);
        set.add(end);
    }
    for(let path of paths){
        let [start,end] = path;
        set.delete(start);
    }
    return [...set].join('');
};
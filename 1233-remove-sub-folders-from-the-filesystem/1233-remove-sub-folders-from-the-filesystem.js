var removeSubfolders = function(folder) {
    folder.sort();
    const res = [];
    for (let path of folder) {
        if (res.length === 0 || !path.startsWith(res[res.length - 1] + "/")) {
            res.push(path);
        }
    }
    return res;
};

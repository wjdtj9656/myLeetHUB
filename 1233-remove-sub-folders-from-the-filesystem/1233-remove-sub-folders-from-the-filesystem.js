	/*
	["/a","/a/b","/c/d","/c/d/e","/c/f"]
				["/a","/c/d","/c/f"]
	*/
var removeSubfolders = function(folder) {
    const map ={};
    for(let a of folder){
      map[a] = (map[a] || 0) +1;
    }
    const eres = [];
    let index = 0;
    for(let a of folder){
      const arr = a.split("/");
      arr.shift();
      let str ="";
      for(let b of arr){
        str+="/";
        str+=b;
        if(a == str) continue;
        if(map[str]){
          eres.push(index);
          break;
        }
      }
      index++;
    }
    const res = [];
    for(let i=0; i<folder.length; i++){
      if(eres.indexOf(i) >= 0) continue;
      else res.push(folder[i]);
    }
    return res;
};
console.log(removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"]));
console.log(removeSubfolders(["/a","/a/b/c","/a/b/d"]));
console.log(removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"]));
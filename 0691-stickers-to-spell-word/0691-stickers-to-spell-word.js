/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
  const map = new Map();
  map.set('',0);
  let result = search(target, stickers, map);
  if(result === Infinity || result === 0) result = -1;
  return result
};

const strDiff = (str1, str2) =>{
  for(let i=0; i<str2.length; i++){
    if(str1.includes(str2[i])) str1 = str1.replace(str2[i],'');
  }
  return str1;
}
const search = (rest,stickers,map) =>{
  if(map.has(rest)) return  map.get(rest);
  let result = Infinity
  for(let s of stickers.filter(s => s.includes(rest[0]))){
    let str = strDiff(rest,s);
    result = Math.min(result, 1 + search(str,stickers,map));
  }
  map.set(rest, result);
  return result;
}
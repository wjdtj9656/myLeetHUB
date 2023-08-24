/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    const map = new Map();

    const strDiff = (str1, str2) =>{
      for(let ch of str2){
        if(str1.includes(ch)) str1 = str1.replace(ch,'');
      }
      return str1;
    }
    map.set('',0);

    const useSticker = (rest) =>{
      if(map.has(rest)) return map.get(rest);
      let res = Infinity;

      for(let s of stickers.filter(s => s.includes(rest[0]))){
        let str = strDiff(rest, s);
        res = Math.min(res, 1 + useSticker(str));
      }

      map.set(rest, res === Infinity || res === 0 ? -1 : res);
      return map.get(rest);
    }
    return useSticker(target);
};
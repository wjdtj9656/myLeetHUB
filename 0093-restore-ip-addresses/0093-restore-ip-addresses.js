/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    const isValid = (str) =>{
        let num = Number(str);
        if(num < 0 || num > 255) return false;
        if(str.length !== String(num).length) return false;
        return true;
    }
    const permute = (arr,str) => {
        if(arr.length === 3){
            if(isValid(str)) result.push([...arr,str]);
            return;
        }
        for(let i=1; i<4; i++){
            let subStr = str.slice(0,i);
            if(!isValid(subStr)) continue;
            permute([...arr,subStr],str.slice(i));
        }
    }
    permute([],s);
    return result.map((ip)=>ip.join('.'));
};

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let a ="";
    let b ="";
    const map ={};
    for(let i=0; i<=11; i++){
        for(let j=0 ;j<=59; j++){
            const str =i.toString(2).padStart(4,'0') +":"+ j.toString(2).padStart(4,'0');
            const one = parseInt(str.split('').filter((v)=>v=='1').length);
            const h = parseInt(str.slice(0,4),2)
            const min = parseInt(str.slice(5,11),2).toString().padStart(2,'0');
            if(!map[one]) map[one] = [];
            map[one].push(h+":"+min);

        }
    }
    return map[turnedOn] || [];
};
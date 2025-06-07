var clearStars = function (s) {
    const cnt = new Array(26).fill().map(()=>[]);
    const str = s.split("");

    for(let i=0; i<str.length; i++){
        const char = str[i];
        if(char =='*'){
            for(let j=0; j<26; j++){
                if(cnt[j].length > 0){
                    str[cnt[j].pop()] = '*';
                    break;
                }
            }
        }else{
            cnt[char.charCodeAt(0) - 97].push(i);
        }
    }
    return str.filter(c=>c!='*').join("");
};
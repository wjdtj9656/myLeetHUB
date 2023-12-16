/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const map = new Map();
    let x=0,y=0;
    for(let i=0; i<secret.length; i++){
        map.set(secret[i],(map.get(secret[i]) || 0)+1);
    }
    for(let i=0; i<guess.length; i++){
        if(guess[i] == secret[i]){
            if(map.has(guess[i]) && map.get(guess[i]) > 0){
                map.set(guess[i],map.get(guess[i])-1);
                x++;
            }
        }
    }
    for(let i=0; i<guess.length; i++){
        if(guess[i] != secret[i]){
            if(map.has(guess[i]) && map.get(guess[i]) > 0){
                map.set(guess[i],map.get(guess[i])-1);
                y++;
            }
        }
    }
    return x+"A"+y+"B";
};
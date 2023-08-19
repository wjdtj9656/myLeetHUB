/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let cnt = 0;
    for(let i=0; i<flowerbed.length; i++){
      if(flowerbed[i] == 1){
        if(i-1 >= 0){
          flowerbed[i-1] = 2;
        }
        else if(i+1 < flowerbed.length){
          flowerbed[i+1] = 2; 
        }
      }
      if(flowerbed[i] == 0){
        if(i==0){
          if(flowerbed.length == 1) cnt++;
          if(flowerbed[i+1] != 1){
            flowerbed[i] = 1;
            flowerbed[i+1] == 2;
            cnt++;
          }
        }
        else if(i== flowerbed.length-1){
          if(flowerbed[i-1] != 1) {
            flowerbed[i] = 1;
            cnt++;
          }
        }
        else{
          if(flowerbed[i-1] != 1 && flowerbed[i+1] != 1){
            flowerbed[i] = 1;
            flowerbed[i+1] = 2;
            cnt++;
          }
        }
      }
      if(cnt >= n) return true;
    }
    return false;
};
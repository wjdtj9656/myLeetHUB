class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        int cnt = 0;
        for(int num : arr){
            if(num % 2 ==0){
                cnt = 0;
            }
            else{
                cnt++;
            }
            if(cnt == 3){
                return true;
            }
        }
        return false;
    }
}
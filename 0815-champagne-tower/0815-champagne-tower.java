class Solution {
    public double champagneTower(int poured, int query_row, int query_glass) {
        double arr[][] = new double[101][101];
        arr[0][0] = poured;
        for(int i=0; i<=query_row; i++){
            for(int j=0; j<=i; j++){
                double val = (arr[i][j] - 1.0)/2.0;
                if(val > 0){
                    arr[i+1][j] += val;
                    arr[i+1][j+1] += val;
                }
            }
        }
        return Math.min(1,arr[query_row][query_glass]);
    }
}
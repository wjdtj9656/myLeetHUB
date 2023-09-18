class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        int [][] arr = new int[mat.length][2];
        for(int i=0; i<mat.length; i++){
            int cnt = 0;
            for(int v : mat[i]){
                if(v==1) cnt++;
            }
            arr[i][0] = i;
            arr[i][1] = cnt;
        }
        Arrays.sort(arr,(a,b)->a[1]-b[1]);
        int[] answer = new int[k];
        for(int i=0; i<k; i++){
            answer[i] = arr[i][0];
        }
        return answer;
    }
}
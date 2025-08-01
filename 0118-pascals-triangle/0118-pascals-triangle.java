class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> list = new ArrayList<>();
        if(numRows == 0) return list;
        List<Integer> prev = null;
        List<Integer> now = null;
        
        for(int i=0; i<numRows; i++){
            now = new ArrayList<>();
            for(int j=0; j<=i; j++){
                if(j==0 || j==i){
                    now.add(1);
                }
                else{
                    now.add(prev.get(j-1) + prev.get(j));
                }
            }
            prev = now;
            list.add(now);
        }
        return list;
    }
}
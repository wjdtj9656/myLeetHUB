class Solution {
    public int closestMeetingNode(int[] edges, int node1, int node2) {
        int result = -1;
        HashMap<Integer,Integer> hm1 = new HashMap<>();
        HashMap<Integer,Integer> hm2 = new HashMap<>();
        int cnt = 0;
        while(!hm1.containsKey(node1) && node1 != -1){
            hm1.put(node1,++cnt);
            node1 = edges[node1];
        }
        cnt = 0;
        while(!hm2.containsKey(node2) & node2 != -1){
            hm2.put(node2,++cnt);
            node2 = edges[node2];
        }
        int min = (int)10e9;
        int max = 0;
        for(int i=0; i<edges.length; i++){
            if(hm1.get(i) == null || hm2.get(i) == null) continue;
            max = Math.max(hm1.get(i),hm2.get(i));
            if(min > max){
                min = max;
                result = i;
            }
        }
        return result;
    }
}
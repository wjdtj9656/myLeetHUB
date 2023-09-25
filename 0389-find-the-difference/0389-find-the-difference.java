class Solution {
    public char findTheDifference(String s, String t) {
        Map<Character, Integer> hm = new HashMap<>();
        for(int i=0; i<t.length(); i++){
            hm.put(t.charAt(i),hm.getOrDefault(t.charAt(i),0)+1);
        }
        for(int i=0; i<s.length(); i++){
             hm.put(s.charAt(i), hm.get(s.charAt(i))-1);
             if(hm.get(s.charAt(i)) == 0) hm.remove(s.charAt(i));
        }
        for(char c : hm.keySet()){
            return c;
        }
        return 'a';
    }
}
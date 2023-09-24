class Solution {
    public int longestStrChain(String[] words) {
        List<Set<String>> wordSets = new ArrayList<>(17);
        for(int i=0; i<17; ++i){
            wordSets.add(new HashSet<>());
        }

        for(String word : words){
            wordSets.get(word.length()).add(word);
        }

        Map<String,Integer> dp = new HashMap<>();
        int result = 1;
        for(int i=16; i>0; i--){
            if(wordSets.get(i-1).isEmpty()) continue;
            for(String word : wordSets.get(i)){
                int val = dp.getOrDefault(word,1);
                for(int j=0; j<word.length(); j++){
                    String str = word.substring(0,j) + word.substring(j+1);
                    if(wordSets.get(i-1).contains(str) && val >= dp.getOrDefault(str,1)){
                        dp.put(str,val+1);
                        result = Math.max(result, val+1);
                    }
                }
            }
        }
        return result;
    }
}
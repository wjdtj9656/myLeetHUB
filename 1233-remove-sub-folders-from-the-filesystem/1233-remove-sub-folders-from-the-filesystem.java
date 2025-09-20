class Solution {
    public List<String> removeSubfolders(String[] folder) {
        Arrays.sort(folder);

        List<String> res = new ArrayList<>();
        String prev = "";
        for(String path : folder){
            if(prev.isEmpty() || !path.startsWith(prev+"/")){
                res.add(path);
                prev = path;
            }
        }
        return res;
    }
}

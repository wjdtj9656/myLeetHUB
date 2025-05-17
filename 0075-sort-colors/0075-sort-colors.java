class Solution {
    public void sortColors(int[] nums) {
        Map<Integer,Integer> map = new HashMap<>();
        for(int num : nums){
            map.put(num,(map.getOrDefault(num,0))+1);
        }
        int index = 0;
        for(int i=0; i<3; i++){
            int num = map.getOrDefault(i, 0);
            while(num > 0){
                nums[index++] = i;
                num-=1;
            }
        }
        System.out.println(Arrays.toString(nums));
    }
}
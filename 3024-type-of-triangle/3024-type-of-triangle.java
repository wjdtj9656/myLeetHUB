class Solution {
    public String triangleType(int[] nums) {
        Set<Integer>  set = new HashSet<>();
        for(int num : nums){
            set.add(num);
        }
        
        Arrays.sort(nums);

        if (nums[0] + nums[1] <= nums[2]) {
            return "none";
        }
        int size = set.size();
        if(size == 1){
            return "equilateral";
        }
        else if(size == 2){
            return "isosceles";
        }
        else {
            return "scalene";
        }
    }
}
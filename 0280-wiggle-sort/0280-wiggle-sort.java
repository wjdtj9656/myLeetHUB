class Solution {
    public void wiggleSort(int[] nums) {
        Arrays.sort(nums);
        int [] arr = nums.clone();
        int left = 0;
        int right = nums.length-1;
        for(int i=0; i<nums.length; i++){
            if(i % 2 ==0) nums[i] = arr[left++];
            else nums[i] = arr[right--];
        }
    }
}
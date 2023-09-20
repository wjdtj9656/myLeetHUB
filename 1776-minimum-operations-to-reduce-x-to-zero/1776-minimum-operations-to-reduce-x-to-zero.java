class Solution {
    public int minOperations(int[] nums, int x) {
        int sum = 0;
        for(int num : nums){
            sum += num;
        }
        sum-=x;
        if(sum ==0) return nums.length;
        int left = 0;
        int now = 0;
        int result = 0;
        for(int right=0; right<nums.length; right++){
            now += nums[right];
            while(left <= right && now > sum){
                now -= nums[left];
                left++;
            }
            if(sum == now){
                result = Math.max(result, right - left +1);
            }
        }
        return result !=0? nums.length - result:-1;
    }
}
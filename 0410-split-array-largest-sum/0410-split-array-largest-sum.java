class Solution {
    public int splitArray(int[] nums, int k) {
        int left = 0;
				int right = 0;
				for(int i=0; i<nums.length; ++i){
					left = Math.max(left, nums[i]);
					right += nums[i];
				}

				while(left < right){
					int mid = (left + right) >>1;
					if(can(nums, mid, k)){
						right = mid;
					}
					else{
						left = mid+1;
					}
				}
				return left;
    }

		public boolean can(int []nums, int mid, int k){
			int part = 1;
			int sum = 0;
			for(int i=0; i<nums.length; ++i){
				sum += nums[i];
				if(sum > mid){
					part++;
					sum = nums[i];
				}
			}
			return part<=k;
		}
}


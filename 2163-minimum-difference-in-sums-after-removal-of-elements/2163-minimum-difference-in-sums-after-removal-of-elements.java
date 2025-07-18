import java.util.PriorityQueue;
import java.util.Collections;

class Solution {
    public long minimumDifference(int[] nums) {
        int len = nums.length;
        int n = len / 3;
        long[] left = new long[len + 1];
        PriorityQueue<Integer> maxPQ = new PriorityQueue<>(Collections.reverseOrder());
        long sumLeft = 0;
        for (int i = 1; i <= len; i++) {
            maxPQ.offer(nums[i - 1]);
            sumLeft += nums[i - 1];
            if (maxPQ.size() > n) {
                sumLeft -= maxPQ.poll();
            }
            left[i] = sumLeft;
        }

        long[] right = new long[len + 1];
        PriorityQueue<Integer> minPQ = new PriorityQueue<>();
        long sumRight = 0;
        for (int i = len; i >= 1; i--) {
            minPQ.offer(nums[i - 1]);
            sumRight += nums[i - 1];
            if (minPQ.size() > n) {
                sumRight -= minPQ.poll();
            }
            right[i - 1] = sumRight;
        }

        long ans = Long.MAX_VALUE;
        for (int i = n; i <= 2 * n; i++) {
            ans = Math.min(ans, left[i] - right[i]);
        }
        return ans;
    }
}

class Solution {
    public int numRescueBoats(int[] people, int limit) {
        int left = 0;
        int right = people.length-1;
        int answer = 0;
        Arrays.sort(people);
        while(left <= right){
            if(people[left] + people[right] > limit){
                answer++;
                right--;
            }
            else if(people[left] + people[right] <= limit){
                answer++;
                left++;
                right--;
            }
        }
        return answer;
    }
}
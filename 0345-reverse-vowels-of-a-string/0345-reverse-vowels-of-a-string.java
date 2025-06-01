class Solution {
    public String reverseVowels(String s) {
                Set<Character> vowels = new HashSet<>(
                Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')
        );

        char[] chars = s.toCharArray();
        int left = 0;
        int right =  s.length() - 1 ;

        while (left < right) {
            while (left < right && !vowels.contains( chars[left] )) { // 왼쪽 문자가 모음이 아닌 경우
                left++;
            }

            while (left < right && !vowels.contains(chars[right] )) { // 오른쪽 문자가 모음이 아닌 경우
                right--;
            }

            // 모음이면 서로 교환
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;

            left++;  // 왼쪽 포인터 이동
            right--;   // 오른쪽 포인터 이동
        }

        return new String(chars);

    }
}
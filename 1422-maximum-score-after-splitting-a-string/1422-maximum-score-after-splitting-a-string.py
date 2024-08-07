class Solution:
    def maxScore(self, s: str) -> int:
        maxx = 0
        i = 1
        while i<= len(s)-1:
            left = s[:i]
            right = s[i:]
            zero = left.count("0")
            one = right.count("1")
            maxx = max(maxx,zero+one)
            i+=1
        return maxx
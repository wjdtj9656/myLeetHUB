class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        map ={}
        for i in range(len(arr)):
            map[arr[i]] = map.get(arr[i],0)+1
        arr = []
        for key,value in map.items():
            arr.append([key,value])
        sortedArr = sorted(arr,key=lambda x:(-x[1]))
        size = len(sortedArr)
        for i in range(size):
            if(k >= sortedArr[-1][1]):
                k -= sortedArr[-1][1]
                sortedArr.pop()
        return len(sortedArr)


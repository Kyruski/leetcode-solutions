class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        maxNum = arr[-1]
        prev = 0
        for i in range(len(arr) - 2, -1, -1):
            maxNum = max(prev, maxNum)
            prev = arr[i]
            arr[i] = maxNum
        arr[-1] = -1
        return arr

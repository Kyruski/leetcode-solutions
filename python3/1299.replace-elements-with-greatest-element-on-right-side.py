class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        output = arr.copy()
        maxNum = arr[-1]
        for i in range(len(arr) - 2, -1, -1):
            maxNum = max(arr[i + 1], maxNum)
            output[i] = maxNum
        output[-1] = -1
        return output

class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        output = []
        for i in range(len(l)):
            arr = nums[l[i]: r[i] + 1]
            arr.sort()
            step = arr[1] - arr[0]
            isValid = True
            for x in range(2, len(arr)):
                if arr[x] - arr[x - 1] != step:
                    isValid = False
                    break
            output.append(isValid)
        return output
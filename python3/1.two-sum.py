class Solution:
    def __init__(self):
        self.dict = {}

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, num in enumerate(nums):
            j = self.dict.get(target - num)
            if j != None:
                return [j, i]
            self.dict[num] = i

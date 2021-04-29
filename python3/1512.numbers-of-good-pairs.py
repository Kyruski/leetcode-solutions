class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        dict = {}
        count = 0

        for x in nums:
            if dict.get(x):
                count += dict[x]
                dict[x] += 1
            else:
                dict[x] = 1
        return count

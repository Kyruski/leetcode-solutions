class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        # return reduce(lambda tot, num: tot + 1 if len(str(num)) % 2 == 0 else tot, nums, 0)

        # total = 0
        # for num in nums:
        #     if len(str(num)) % 2 == 0:
        #         total += 1
        # return total

        total = 0
        for num in nums:
            total += 1 if len(str(num)) % 2 == 0 else 0
        return total

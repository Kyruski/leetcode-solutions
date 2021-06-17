class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        output = []
        for i in range(0, len(nums), 2):
            output.extend([nums[i + 1]] * nums[i])
        return output
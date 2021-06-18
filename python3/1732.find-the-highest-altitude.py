class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        maxAlt = 0
        curr = 0
        for val in gain:
            curr += val
            if curr > maxAlt:
                maxAlt = curr
        return maxAlt
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        bin_x = bin(x)[2:].zfill(31)
        bin_y = bin(y)[2:].zfill(31)
        return sum(b1 != b2 for b1, b2 in zip(bin_x, bin_y))

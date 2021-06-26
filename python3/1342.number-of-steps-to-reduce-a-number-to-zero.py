class Solution:
    def numberOfSteps(self, num: int) -> int:
        # step = 0
        # while num > 0:
        #     num = num / 2 if num % 2 == 0 else num - 1
        #     step += 1
        # return step

        bits = bin(num)[2:]
        return len(bits) - 1 + bits.count('1')

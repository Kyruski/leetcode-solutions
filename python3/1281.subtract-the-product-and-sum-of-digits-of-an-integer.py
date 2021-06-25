class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        # return prod([int(x) for x in str(n)]) - sum([int(x) for x in str(n)])

        sumNum = 0
        prodNum = 1
        for x in str(n):
            sumNum += int(x)
            prodNum *= int(x)
        return prodNum - sumNum

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        indexList = []
        output = []
        currPermutation = []

        def runPermutations():
            for i in range(len(nums)):
                if i in indexList:
                    continue
                else:
                    indexList.append(i)
                    currPermutation.append(nums[i])

                if len(currPermutation) == len(nums):
                    output.append(currPermutation.copy())
                else:
                    runPermutations()

                currPermutation.pop()
                indexList.pop()

        runPermutations()
        return output

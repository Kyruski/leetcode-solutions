class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        output = [[]]
        currArray = []

        def recurse(currNumsList: List[int]):
            for index, num in enumerate(currNumsList):
                currArray.append(num)
                output.append(currArray.copy())
                recurse(currNumsList[index + 1:])
                currArray.pop()

        recurse(nums)
        return output

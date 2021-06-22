class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        # return [sum([y < x for y in nums]) for x in nums]

        # output = []
        # for x in nums:
        #     count = 0
        #     for y in nums:
        #         if y < x:
        #             count += 1
        #     output.append(count)
        # return output

        dict = {}
        output = []
        for x in nums:
            count = dict.get(x)
            if dict.get(x) == None:
                count = 0
                for y in nums:
                    if y < x:
                        count += 1
            output.append(count)
        return output
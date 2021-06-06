class Solution:
    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:
        # count = 0
        # for i in range(len(startTime)):
        #     if startTime[i] <= queryTime <= endTime[i]:
        #         count += 1
        # return count

        # return sum(startTime[i] <= queryTime <= endTime[i] for i in range(len(startTime)))

        return sum(s <= queryTime <= e for s, e in zip(startTime, endTime))

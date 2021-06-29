class Solution:
    def sortSentence(self, s: str) -> str:
        # arr1 = s.split()
        # arr2 = [None] * len(arr1)
        # for word in arr1:
        #     arr2[int(word[-1]) - 1] = word[:-1]
        # return ' '.join(arr2)

        arr1 = s.split()
        arr1.sort(key=lambda w: w[-1])
        for i in range(len(arr1)):
            arr1[i] = arr1[i][:-1]
        return ' '.join(arr1)

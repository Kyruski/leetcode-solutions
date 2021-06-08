class Solution:
    # def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:

    #     firstTotal = ''
    #     secondTotal = ''
    #     targetTotal = ''
    #     for x in list(firstWord):
    #         firstTotal += str(ord(x) - 97)
    #     for x in list(secondWord):
    #         secondTotal += str(ord(x) - 97)
    #     for x in list(targetWord):
    #         targetTotal += str(ord(x) - 97)
    #     return int(firstTotal) + int(secondTotal) == int(targetTotal)
    def getTotal(self, word: str) -> int:
        return int(''.join(str(ord(i) - 97) for i in list(word)))

    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
        return self.getTotal(firstWord) + self.getTotal(secondWord) == self.getTotal(targetWord)

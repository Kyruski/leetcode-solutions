class Solution:
    def __init__(self):
        self.output = []

    def fizzBuzz(self, n: int) -> List[str]:
        string = ''
        for i in range(n):
            num = i + 1
            if num % 3 == 0:
                string += 'Fizz'
            if num % 5 == 0:
                string += 'Buzz'
            if string == '':
                string += str(num)
            self.output.append(string)
            string = ''

        return self.output

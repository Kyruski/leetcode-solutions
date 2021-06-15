class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        isOuter = True
        str = ''
        counter = 0
        for item in s:
            if isOuter:
                isOuter = False
            elif counter == 0 and item == ')':
                isOuter = True
            else:
                if item == '(':
                    counter += 1
                else:
                    counter -= 1
                str += item
        return str

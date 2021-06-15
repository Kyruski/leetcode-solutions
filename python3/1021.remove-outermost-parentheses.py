class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        str = ''
        counter = 0
        for item in s:
            if item == ')':
                counter -= 1
            if counter > 0:
                str += item
            if item == '(':
                counter += 1
        return str

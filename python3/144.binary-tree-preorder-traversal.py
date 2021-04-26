# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.output = []

    def preorderTraversal(self, root: TreeNode) -> List[int]:
        curr = root
        stack = []

        while stack or curr:
            if curr:
                self.output.append(curr.val)
                stack.append(curr.right)
                curr = curr.left
            else:
                curr = stack.pop()

        return self.output

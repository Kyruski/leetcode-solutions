# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        stack = []
        node = root
        total = 0
        while len(stack) or node:
            if not node:
                node = stack.pop()
            else:
                if low <= node.val <= high:
                    total += node.val
                stack.append(node.right)
                node = node.left
        return total

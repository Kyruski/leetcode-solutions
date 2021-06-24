# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        numOne = ''
        numTwo = ''
        node = None
        while l1 or l2:
            if l1:
                numOne = str(l1.val) + numOne
                l1 = l1.next
            if l2:
                numTwo = str(l2.val) + numTwo
                l2 = l2.next
        for char in str(int(numOne) + int(numTwo)):
            node = ListNode(val=int(char), next=node)
        return node

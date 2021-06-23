# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        if left == right:
            return head
        currNode = head
        prev = None
        start = None
        startBefore = None
        nodeNum = 1
        while currNode:
            if nodeNum == left:
                start, startBefore, currNode, prev = currNode, prev, currNode.next, currNode
            elif nodeNum == right:
                currNode.next, start.next = prev, currNode.next
                if startBefore == None:
                    head = currNode
                else:
                    startBefore.next = currNode
                break 
            elif start:
                temp = prev
                prev = currNode
                currNode = currNode.next
                prev.next = temp
            else:
                prev, currNode = currNode, currNode.next
            nodeNum += 1
        return head

                


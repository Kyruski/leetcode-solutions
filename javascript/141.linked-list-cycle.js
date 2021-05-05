/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  let p1 = head;
  let p2;
  if (head.next) p2 = head.next;
  else return false;
  while (p1 && p2) {
    if (p1 === p2) return true;
    p1 = p1.next;
    if (p2.next !== null) p2 = p2.next.next;
    else return false;
  }
  return false;
};
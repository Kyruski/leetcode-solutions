/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let last = list2;
  let prev = null;
  let curr = list1;
  let i = 0
  while (last.next) {
    last = last.next;
  }
  while (i <= b) {
    if (i === a) prev.next = list2;
    if (i === b) {
      last.next = curr.next;
      return list1
    }
    [prev, curr] = [curr, curr.next];
    i++;
  }
  return list1;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const stack = []
  let curr = root;
  const values = [];
  while (curr || stack.length) {
    if (curr) {
      stack.push(curr.right);
      values.push(curr.val);
      curr = curr.left
    } else {
      curr = stack.pop()
    }
  }

  return values.sort((a, b) => a - b)[k - 1];
};
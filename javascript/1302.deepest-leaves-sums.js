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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let maxDepth = 0;
  let sum = 0;
  const traverse = (node, depth = 0) => {
    if (!node) return;
    if (depth > maxDepth) {
      sum = node.val;
      maxDepth = depth;
    } else if (depth === maxDepth) {
      sum += node.val
    }
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1)
  }
  traverse(root);
  return sum;
};
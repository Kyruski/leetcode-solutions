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
var sumEvenGrandparent = function(root) {
  let total = 0;
  const traverse = (node, p, gp) => {
    if (!node) return;
    if (gp) total += node.val;
    let curr = node.val % 2 === 0;
    traverse(node.left, curr, p);
    traverse(node.right, curr, p);
  }
  traverse(root, false, false);
  return total;
};
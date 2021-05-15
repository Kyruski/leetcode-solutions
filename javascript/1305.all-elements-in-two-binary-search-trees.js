/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const output = [];

  const traverse = (node) => {
    if (node === null) return;
    traverse(node.left);
    output.push(node.val);
    traverse(node.right);
    return
  }

  traverse(root1)
  traverse(root2);

  return output.sort((a, b) => a - b);
};
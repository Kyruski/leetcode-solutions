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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let same = true;
  const traverse = (left, right) => {
    if (left === right) {
      return;
    } else if (left === null || right === null || left.val !== right.val) {
      same = false;
      return;
    }
    traverse(left.left, right.right);
    traverse(left.right, right.left);
  }

  traverse(root.left, root.right);

  return same;
};
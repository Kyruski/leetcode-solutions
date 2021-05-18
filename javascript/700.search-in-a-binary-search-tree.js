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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let output = null;

  const traverse = (node) => {
    if (node === null) return;
    if (node.val === val) {
      output = node;
      return;
    } else if ( node.val > val ) {
      traverse(node.left)
    } else {
      traverse(node.right)
    }
  }

  traverse(root);

  return output;
};
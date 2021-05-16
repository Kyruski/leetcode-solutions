/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let output = null;

  const traverse = (node1, node2) => {
    if (output || !node1) return;
    if (node1 === target) {
      output = node2;
      return;
    }
    traverse(node1.left, node2.left);
    traverse(node1.right, node2.right);
  }

  traverse(original, cloned);

  return output;
};
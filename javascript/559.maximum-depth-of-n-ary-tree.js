/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0;
  let currDepth = 0;
  const traverse = node => {
    currDepth++;
    if (node.children !== null) {
      for (let item of node.children) {
        traverse(item);
      }
    }
    if (currDepth > max) max = currDepth;
    currDepth--;
  }

  if (root !== null) traverse(root);
  return max;
};
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const output = [];
  const traverse = node => {
    if (node === null) return;
    for (let item of node.children) {
      traverse(item)
    }
    output.push(node.val)
  }
  traverse(root);
  return output;
};
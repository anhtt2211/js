/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
// [easy][tree] 590. N-ary Tree Postorder Traversal

var postorder = function (root) {
  if (!root) return [];

  const result = [];
  for (const children of root.children) {
    result.push(...postorder(children));
  }
  result.push(root.val);
  return result;
};

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
 * @return {number[]}
 */
// [easy][tree] 94. Binary Tree Inorder Traversal

var inorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (node === null) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);

  return result;
}; // left > root > right

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Create a sample binary tree
//      1
//     / \
//    2   3
//   / \
//  4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Test the inorderTraversal function
console.log(inorderTraversal(root)); // Expected output: []

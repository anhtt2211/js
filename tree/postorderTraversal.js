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
// [easy][tree] 145. Binary Tree Postorder Traversal

var postorderTraversal = function (root) {
  const result = [];
  dfs(root, result);
  return result;
};

function dfs(node, result) {
  if (node === null) {
    return;
  }

  dfs(node.left, result);
  dfs(node.right, result);
  result.push(node.val);
}

// Define the binary tree nodes
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

// Test the postorderTraversal function
console.log(postorderTraversal(root)); // Expected output: [4, 5, 2, 3, 1]

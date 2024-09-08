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
// [medium][tree] 199. Binary Tree Right Side View

var rightSideView = function (root) {
  const result = [];

  function dfs(node, level) {
    if (!node) return;

    if (level >= result.length) {
      result.push(node.val);
    } else {
      result[level] = node.val;
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);
  return result;
};

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Function to build a binary tree from an array
function buildTree(arr) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root]; // Use a queue to facilitate level order insertion

  let i = 1; // Start from the second element

  while (i < arr.length) {
    const current = queue.shift(); // Get the current node

    // Create left child
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left); // Add left child to the queue
    }
    i++; // Move to the next element

    // Create right child
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right); // Add right child to the queue
    }
    i++; // Move to the next element
  }

  return root;
}

// Example usage:
const inputArray1 = [1, 2, 3, null, 5, null, 4];
const inputArray2 = [1, null, 3];
const inputArray3 = [];

console.log(rightSideView(buildTree(inputArray1))); // Output: [1,3,4]
console.log(rightSideView(buildTree(inputArray2))); // Output: [1,3]
console.log(rightSideView(buildTree(inputArray3))); // Output: []

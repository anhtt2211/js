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
 * @return {number[][]}
 */
// [medium][tree] 102. Binary Tree Level Order Traversal

var levelOrder = function (root) {
  if (root === null) return [];

  const result = [];
  const queue = [];
  let currentLevel = -1;

  queue.push([root, 0]);

  while (queue.length) {
    const [node, level] = queue.shift();

    if (level > currentLevel) {
      result.push([node.val]);
      currentLevel = level;
    } else {
      result[currentLevel].push(node.val);
    }

    if (node.left) {
      queue.push([node.left, level + 1]);
    }
    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

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
const inputArray1 = [3, 9, 20, null, null, 15, 7];
const inputArray2 = [];

console.log(levelOrder(buildTree(inputArray1))); // Output: [[3], [9, 20], [15, 7]]
console.log(levelOrder(buildTree(inputArray2))); // Output: []

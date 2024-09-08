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
 * @param {number} targetSum
 * @return {number}
 */
// [medium][tree] 437. Path Sum III

var pathSum = function (root, targetSum) {
  let count = 0;

  function dfs(node, currentSum) {
    if (!node) return;

    currentSum += node.val;

    if (currentSum === targetSum) {
      count++;
    }

    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  }

  function findPaths(node) {
    if (!node) return;

    dfs(node, 0);

    findPaths(node.left);
    findPaths(node.right);
  }
  findPaths(root);

  return count;
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
const inputArray1 = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1];
const inputArray2 = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];

console.log(pathSum(buildTree(inputArray1), 8));
console.log(pathSum(buildTree(inputArray2), 22));

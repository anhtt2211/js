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
 * @return {number}
 */
// [medium][tree] 1448. Count Good Nodes in Binary Tree

var goodNodes = function (root) {
  let count = 0;

  function dfs(node, maxSoFar) {
    if (!node) return;

    if (node.val >= maxSoFar) {
      count++;
    }

    maxSoFar = Math.max(maxSoFar, node.val);
    dfs(node.left, maxSoFar);
    dfs(node.right, maxSoFar);
  }

  dfs(root, root.val);

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
const inputArray1 = [3, 1, 4, 3, null, 1, 5];

console.log(goodNodes(buildTree(inputArray1)));

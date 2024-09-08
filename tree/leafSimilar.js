/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// [easy][tree] 872. Leaf-Similar Trees

var leafSimilar = function (root1, root2) {
  const leafSequence1 = [];
  const leafSequence2 = [];

  function dfs(node, sequence) {
    if (!node) return;

    if (!node.left && !node.right) {
      sequence.push(node.val);
    }

    dfs(node.left, sequence);
    dfs(node.right, sequence);
  }
  dfs(root1, leafSequence1);
  dfs(root2, leafSequence2);

  if (leafSequence1.length !== leafSequence2.length) {
    return false;
  }

  for (let i = 0; i < leafSequence1.length; i++) {
    if (leafSequence1[i] !== leafSequence2[i]) {
      return false;
    }
  }

  return true;
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
const inputArray1 = {
  root1: [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
  root2: [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
};

console.log(
  leafSimilar(buildTree(inputArray1.root1), buildTree(inputArray1.root2))
);

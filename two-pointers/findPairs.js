/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [medium][two-pointers] 532. K-diff Pairs in an Array
var findPairs = function (nums, k) {
  const sorted = nums.sort((a, b) => a - b);
  const ans = new Set();

  let left = 0,
    right = 1;

  while (right < nums.length) {
    const lVal = sorted[left],
      rVal = sorted[right];
    const pair = Math.abs(lVal - rVal);

    if (pair === k) {
      ans.add([lVal, rVal].toString());
      left++, right++;
    } else if (pair > k) {
      left++;
    } else {
      right++;
    }

    if (left === right) {
      right++;
    }
  }

  return ans.size;
};

console.log(findPairs([1, 1, 1, 1, 1], 0));
console.log(findPairs((nums = [3, 1, 4, 1, 5]), (k = 2)));
console.log(findPairs((nums = [1, 2, 3, 4, 5]), (k = 1)));
console.log(findPairs((nums = [1, 3, 1, 5, 4]), (k = 0)));

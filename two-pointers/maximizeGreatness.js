/**
 * @param {number[]} nums
 * @return {number}
 */
// [medium][two-pointers] 2592. Maximize Greatness of an Array
var maximizeGreatness = function (nums) {
  const sorted = nums.sort((a, b) => a - b);

  let ans = 0;
  let left = nums.length - 2,
    right = nums.length - 1;

  while (left >= 0) {
    if (sorted[left] < sorted[right]) {
      right--;
      ans++;
    }
    left--;
  }

  return ans;
};

console.log(maximizeGreatness((nums = [1, 3, 5, 2, 1, 3, 1])));
console.log(maximizeGreatness((nums = [1, 2, 3, 4])));

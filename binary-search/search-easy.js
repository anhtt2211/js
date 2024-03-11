/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [easy][binary-search] 704. Binary Search
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      ans = mid;
      left++, right--;
    } else if (nums[mid] < target) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 9)));
console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 2)));

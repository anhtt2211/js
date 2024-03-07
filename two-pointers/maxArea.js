/**
 * @param {number[]} height
 * @return {number}
 */
// [medium][two-pointers] 11. Container With Most Water
var maxArea = function (height) {
  let max = 0;

  let left = 0,
    right = height.length - 1;

  while (left <= right) {
    const hi = Math.min(height[left], height[right]);
    const wi = right - left;

    const area = hi * wi;
    max = Math.max(max, area);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

// console.log(maxArea((height = [1, 8, 6, 2, 5, 4, 8, 3, 7])));
// console.log(maxArea((height = [1, 1])));
console.log(maxArea([0, 2]));

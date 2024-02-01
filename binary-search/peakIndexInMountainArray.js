/**
 * @param {number[]} arr
 * @return {number}
 */

// [medium][binary-search] 852. Peak Index in a Mountain Array
var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};

const input = [0, 10, 5, 2];
const output = peakIndexInMountainArray(input);
console.log("🚀 ~ output:", output);

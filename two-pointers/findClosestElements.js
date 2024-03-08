/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// [medium][two-pointers] 658. Find K Closest Elements
var findClosestElements = function (arr, k, x) {
  let left = 0,
    right = arr.length - 1;

  while (right - left >= k) {
    const lVal = arr[left];
    const rVal = arr[right];

    if (isClosest(lVal, rVal, x)) {
      right--;
    } else {
      left++;
    }
  }
  const answer = arr.slice(left, right + 1);

  return answer;
};

const isClosest = (a, b, x) => {
  if (Math.abs(a - x) < Math.abs(b - x)) {
    return true;
  } else if (Math.abs(a - x) === Math.abs(b - x) && a < b) {
    return true;
  }

  return false;
};

console.log(findClosestElements([1], 1, 1));
console.log(findClosestElements((arr = [1, 2, 3, 4, 5]), (k = 4), (x = 3)));
console.log(findClosestElements((arr = [1, 2, 3, 4, 5]), (k = 4), (x = -1)));

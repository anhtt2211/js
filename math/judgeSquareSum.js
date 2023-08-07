/**
 * @param {number} c
 * @return {boolean}
 */
// [medium][math] 633. Sum of Square Numbers

var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;

    if (sum === c) {
      return true;
    } else if (sum < c) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};

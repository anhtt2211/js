/**
 * @param {number} x
 * @return {number}
 */
// [easy][binary-search] 69. Sqrt(x)
var mySqrt = function (x) {
  let left = 0;
  let right = 46340;
  let ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

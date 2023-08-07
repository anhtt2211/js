/**
 * @param {number} num
 * @return {boolean}
 */
// [easy][math] 367. Valid Perfect Square

var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    const midd = Math.floor((right + left) / 2);
    const square = midd * midd;

    if (square === num) {
      return true;
    } else if (square > num) {
      right = midd - 1;
    } else {
      left = midd + 1;
    }
  }

  return false;
};

console.log(isPerfectSquare((num = 16)));
console.log(isPerfectSquare((num = 14)));

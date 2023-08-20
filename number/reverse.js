/**
 * @param {number} x
 * @return {number}
 */
// [medium][number] 7. Reverse Integer

var reverse = function (x) {
  let isNegotive = x < 0;
  if (isNegotive) {
    x = Math.abs(x);
  }
  const INT32_MAX = Math.pow(2, 31) - 1;
  const INT32_MIN = -Math.pow(2, 31);

  const digits = x.toString().split("").map(Number).reverse();

  const strResult = isNegotive ? "-" + digits.join("") : digits.join("");
  const numResult = Number(strResult);

  if (numResult < INT32_MIN || numResult > INT32_MAX) {
    return 0;
  }

  return numResult;
};

console.log(reverse(1534236469));
console.log(reverse((x = 123))); // 321
console.log(reverse((x = -123))); // -321
console.log(reverse((x = 120))); // 21

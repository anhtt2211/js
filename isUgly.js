/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  if (n < 3) return true;

  if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0) return false;

  if (n % 2 === 0) {
    n = n / 2;
  }

  if (n % 3 === 0) {
    n = n / 3;
  }

  if (n % 5 === 0) {
    n = n / 5;
  }

  return isUgly(n);
};

console.log(isUgly((n = -2147483648)));
// console.log(isUgly((n = 6)));
// console.log(isUgly((n = 1)));
// console.log(isUgly((n = 14)));

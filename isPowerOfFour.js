/**
 * @param {number} n
 * @return {boolean}
 * 342. Power of Four
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  if (n % 4 === 0) n /= 4;
  else {
    return false;
  }
  return isPowerOfFour(n);
};

console.log(isPowerOfFour((n = 16)));
console.log(isPowerOfFour((n = 5)));
console.log(isPowerOfFour((n = 1)));

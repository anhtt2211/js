/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  if (n % 3 === 0) n /= 3;
  else {
    return false;
  }
  return isPowerOfThree(n);
};

console.log(isPowerOfThree((n = 27)));
console.log(isPowerOfThree((n = 0)));
console.log(isPowerOfThree((n = -1)));

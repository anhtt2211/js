/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }

  while (n !== 2) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      return false;
    }
  }

  return true;
};

const n1 = 1;
const result1 = isPowerOfTwo(n1);
console.log({ result1 });

const n2 = 16;
const result2 = isPowerOfTwo(n2);
console.log({ result2 });

const n3 = 3;
const result3 = isPowerOfTwo(n3);
console.log({ result3 });

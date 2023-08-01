/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;
  if (n === 4) return false;

  const digits = n.toString().split("").map(Number);
  n = digits.reduce((acc, value) => acc + value * value, 0);

  return isHappy(n);
};

const n1 = 19;
const result1 = isHappy(n1);
console.log({ result1 });

const n2 = 2;
const result2 = isHappy(n2);
console.log({ result2 });

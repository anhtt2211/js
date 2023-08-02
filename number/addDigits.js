/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;

  const digits = num.toString().split("").map(Number);
  num = digits.reduce((acc, value) => acc + value, 0);

  return addDigits(num);
};

console.log(addDigits((num = 38)));
console.log(addDigits((num = 0)));

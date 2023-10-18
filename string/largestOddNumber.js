/**
 * @param {string} num
 * @return {string}
 */
// [easy][string] 1903. Largest Odd Number in String

var largestOddNumber = function (num) {
  let i = num.length - 1;

  while (i >= 0) {
    if (num[i] % 2 !== 0) {
      return num.substring(0, i + 1);
    }
    i--;
  }

  return "";
};

console.log(largestOddNumber("35427"));

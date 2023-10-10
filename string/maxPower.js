/**
 * @param {string} string
 * @return {number}
 */
// [easy][string] 1446. Consecutive Characters

var maxPower = function (string) {
  let max = 0;
  let count = 0;
  let prev = "";

  for (const char of string) {
    if (char === prev) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
      prev = char;
    }
  }
  return Math.max(max, count);
};

console.log(maxPower("ccc"));

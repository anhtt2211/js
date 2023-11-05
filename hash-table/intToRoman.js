/**
 * @param {number} num
 * @return {string}
 */
// [medium][math] 12. Integer to Roman
var intToRoman = function (num) {
  const dist = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let result = "";

  for (const key of Object.keys(dist).reverse()) {
    const value = dist[key];
    const count = Math.floor(num / key);
    num = num % key;

    result += value.repeat(count);
  }

  return result;
};

console.log(intToRoman(3));

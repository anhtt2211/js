/**
 * @param {string} string
 * @return {number}
 */
// [easy][string] 2716. Minimize String Length

var minimizedStringLength = function (string) {
  return new Set(string).size;
};

console.log(minimizedStringLength("abbd"));

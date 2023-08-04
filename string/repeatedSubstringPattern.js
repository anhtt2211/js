/**
 * @param {string} str
 * @return {boolean}
 */
// [easy][string] 459. Repeated Substring Pattern

var repeatedSubstringPattern = function (str) {
  let size = str.length;
  let sFold = str.substring(1, size) + str.substring(0, size - 1);

  return sFold.indexOf(str) !== -1;
};

console.log(repeatedSubstringPattern((str = "abab")));

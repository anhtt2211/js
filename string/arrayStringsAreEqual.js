/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let str1 = "",
    str2 = "";

  for (const str of word1) {
    str1 = str1.concat(str);
  }

  for (const str of word2) {
    str2 = str2.concat(str);
  }

  return str1 === str2;
};

console.log(arrayStringsAreEqual((word1 = ["ab", "c"]), (word2 = ["a", "bc"])));
console.log(arrayStringsAreEqual((word1 = ["a", "cb"]), (word2 = ["ab", "c"])));
console.log(
  arrayStringsAreEqual((word1 = ["abc", "d", "defg"]), (word2 = ["abcddefg"]))
);

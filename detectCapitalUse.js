/**
 * @param {string} word
 * @return {boolean}
 */
/**
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 */

const detectCapitalUse = function (word) {
  const isUpperCase = (char) => char === char.toUpperCase();

  if (word.toUpperCase() === word) {
    return true;
  } else if (word.toLowerCase() === word) {
    return true;
  } else if (
    isUpperCase(word[0]) &&
    word.slice(1).toLowerCase() === word.slice(1)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(detectCapitalUse((word = "ffffffffffffffffffffF")));

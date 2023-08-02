/**
 * @param {string} word
 * @return {boolean}
 */
/**
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 */
var detectCapitalUse = function (word) {
  let capitalLength = 0,
    notCapitalLength = 0,
    onlyFirstCapitalLength = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letter === letter.toUpperCase()) {
      capitalLength++;
    }
    if (letter === letter.toLowerCase()) {
      notCapitalLength++;
    }
    if (i === 0 && letter.toUpperCase() === letter) {
      onlyFirstCapitalLength = 1;
    } else if (i !== 0 && letter === letter.toUpperCase()) {
      onlyFirstCapitalLength = 0;
    }
  }

  if (
    capitalLength === word.length ||
    notCapitalLength === word.length ||
    onlyFirstCapitalLength === 1
  )
    return true;

  return false;
};

console.log(detectCapitalUse((word = "ffffffffffffffffffffF")));

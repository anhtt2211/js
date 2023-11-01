/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
// 1935. Maximum Number of Words You Can Type

var canBeTypedWords = function (text, brokenLetters) {
  const words = text.split(" ");
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let isBroken = false;

    for (let j = 0; j < brokenLetters.length; j++) {
      if (word.includes(brokenLetters[j])) {
        isBroken = true;
        break;
      }
    }

    if (!isBroken) {
      count++;
    }
  }

  return count;
};

console.log(canBeTypedWords("hello world", "ad"));

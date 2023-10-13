/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// [easy][hash-table] 1160. Find Words That Can Be Formed by Characters

var countCharacters = function (words, chars) {
  const charsMap = {};
  for (const char of chars) {
    charsMap[char] = charsMap[char] + 1 || 1;
  }

  let result = 0;
  for (const word of words) {
    const wordMap = {};
    for (const char of word) {
      wordMap[char] = wordMap[char] + 1 || 1;
    }
    let isGood = true;
    for (const char of word) {
      if (!charsMap[char] || charsMap[char] < wordMap[char]) {
        isGood = false;
        break;
      }
    }
    if (isGood) {
      result += word.length;
    }
  }

  return result;
};

console.log(
  countCharacters(
    (words = ["hello", "world", "leetcode"]),
    (chars = "welldonehoneyr")
  )
);

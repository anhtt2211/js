/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
// [easy][hash-table] 884. Uncommon Words from Two Sentences

var uncommonFromSentences = function (s1, s2) {
  const words = s1.split(" ").concat(s2.split(" "));
  const wordsMap = new Map();
  for (const word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }

  const result = [];
  for (const [key, value] of wordsMap) {
    if (value === 1) {
      result.push(key);
    }
  }

  return result;
};

console.log(
  uncommonFromSentences(
    (s1 = "this apple is sweet"),
    (s2 = "this apple is sour")
  )
);

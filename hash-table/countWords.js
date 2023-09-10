/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
// [easy][hash-table] 2085. Count Common Words With One Occurrence

var countWords = function (words1, words2) {
  if (words1.length < words2.length) {
    [words1, words2] = [words2, words1];
  }

  let count = 0;

  const map1 = new Map();
  const map2 = new Map();

  for (const word of words1) {
    map1.set(word, (map1.get(word) || 0) + 1);
  }

  for (const word of words2) {
    map2.set(word, (map2.get(word) || 0) + 1);
  }

  for (const word of words1) {
    if (
      map1.has(word) &&
      map2.has(word) &&
      map1.get(word) === 1 &&
      map2.get(word) === 1
    ) {
      count++;
    }
  }

  return count;
};

console.log(
  countWords(
    (words1 = ["leetcode", "is", "amazing", "as", "is"]),
    (words2 = ["amazing", "leetcode", "is"])
  )
);
console.log(
  countWords((words1 = ["b", "bb", "bbb"]), (words2 = ["a", "aa", "aaa"]))
);

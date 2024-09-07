/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// [medium][hash-table] 1657. Determine if Two Strings Are Close

function fillMap(word, map) {
  for (const char of word) {
    map.set(char, (map.get(char) || 0) + 1);
  }
}

var closeStrings = function (word1, word2) {
  const map1 = new Map();
  const map2 = new Map();

  fillMap(word1, map1);
  fillMap(word2, map2);

  // Check if the sets of characters are equal
  const set1 = new Set([...map1.keys()]);
  const set2 = new Set([...map2.keys()]);

  if (set1.size !== set2.size || ![...set1].every((char) => set2.has(char))) {
    return false;
  }

  // Check if the sorted arrays of character frequencies are equal
  const sortedFreq1 = [...map1.values()].sort((a, b) => a - b);
  const sortedFreq2 = [...map2.values()].sort((a, b) => a - b);

  return sortedFreq1.every((val, index) => val === sortedFreq2[index]);
};

console.log(closeStrings("uau", "ssx"));
/**
 * a: 1
 * u: 2
 *
 * x: 1
 * s: 2
 */
console.log(closeStrings((word1 = "cabbba"), (word2 = "abbccc")));
console.log(closeStrings("aa", "a"));

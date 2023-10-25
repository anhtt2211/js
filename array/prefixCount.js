/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
// [easy][array] 2185. Counting Words With a Given Prefix

var prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      count++;
    }
  }
  return count;
};

console.log(prefixCount(["flower", "flow", "flight"], "fl"));

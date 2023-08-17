/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// [easy][string] 1768. Merge Strings Alternately

var mergeAlternately1 = function (word1, word2) {
  let pointer1 = 0;
  let pointer2 = 0;

  let result = "";
  while (pointer1 < word1.length || pointer2 < word2.length) {
    let char1 = "",
      char2 = "";

    if (pointer1 < word1.length) {
      char1 = word1[pointer1];
    }
    if (pointer2 < word2.length) {
      char2 = word2[pointer2];
    }

    const sub = char1 + char2;
    result = result.concat(sub);

    pointer1++;
    pointer2++;
  }

  return result;
};

var mergeAlternately2 = function (word1, word2) {
  let result = "";

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result = result.concat(word1[i]);
    if (i < word2.length) result = result.concat(word2[i]);
  }

  return result;
};

console.log(mergeAlternately2((word1 = "abc"), (word2 = "pqr")));
console.log(mergeAlternately2((word1 = "ab"), (word2 = "pqrs")));
console.log(mergeAlternately2((word1 = "abcd"), (word2 = "pq")));

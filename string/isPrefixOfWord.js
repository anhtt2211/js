/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
// [easy][string] 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence

const isPrefix = (word, prefix) => {
  if (word.length < prefix.length) return false;

  for (let i = 0; i < prefix.length; i++) {
    if (word[i] !== prefix[i]) return false;
  }
  return true;
};

var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");

  for (const word of words) {
    if (isPrefix(word, searchWord)) {
      return words.indexOf(word) + 1;
    }
  }

  return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg"));

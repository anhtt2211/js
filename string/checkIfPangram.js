/**
 * @param {string} sentence
 * @return {boolean}
 */
// [easy][string] 1832. Check if the Sentence Is Pangram

var checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};

console.log(checkIfPangram((sentence = "thequickbrownfoxjumpsoverthelazydog")));

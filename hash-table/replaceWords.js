/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// [medium][hash-table] 648. Replace Words

var replaceWords = function (dictionary, sentence) {
  dictionary = dictionary.sort((a, b) => a.length - b.length);
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < dictionary.length; j++) {
      const root = dictionary[j];

      if (word.startsWith(root)) {
        words[i] = root;
        break;
      }
    }
  }

  return words.join(" ");
};

console.log(
  replaceWords(
    ["catt", "cat", "bat", "rat"],
    "the cattle was rattled by the battery"
  )
);

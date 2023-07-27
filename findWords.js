/**
 * @param {string[]} words
 * @return {string[]}
 */

const wordBelongToRow = (word, row) => {
  for (let i = 0; i < word.length; i++) {
    const index = row.indexOf(word[i]);
    if (index === -1) return false;
  }

  return true;
};

var findWords = function (words) {
  const result = [];
  const firstRow = "qwertyuiop",
    secondRow = "asdfghjkl",
    thirdRow = "zxcvbnm";

  words.forEach((element) => {
    const word = element.toLowerCase();
    if (wordBelongToRow(word, firstRow)) {
      result.push(element);
      return;
    }
    if (wordBelongToRow(word, secondRow)) {
      result.push(element);
      return;
    }
    if (wordBelongToRow(word, thirdRow)) {
      result.push(element);
      return;
    }
  });

  return result;
};

const words1 = ["Hello", "Alaska", "Dad", "Peace"];
const result1 = findWords(words1);
console.log({ result1 });

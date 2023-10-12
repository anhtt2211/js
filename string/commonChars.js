/**
 * @param {string[]} words
 * @return {string[]}
 */
// [easy][string] 1002. Find Common Characters

var commonChars = function (words) {
  let result = [];
  let firstWord = words[0];

  for (let i = 0; i < firstWord.length; i++) {
    let char = firstWord[i];
    let isCommon = true;

    for (let j = 1; j < words.length; j++) {
      let word = words[j];
      if (word.indexOf(char) === -1) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) {
      result.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }
  return result;
};

console.log(commonChars(["bella", "label", "roller"]));

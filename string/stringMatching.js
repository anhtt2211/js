/**
 * @param {string[]} words
 * @return {string[]}
 */
// [easy][string] 1408. String Matching in an Array

var stringMatching = function (words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(word)) {
        result.push(word);
        break;
      }
    }
  }
  return result;
};

console.log(stringMatching((words = ["leetcode", "et", "code"])));

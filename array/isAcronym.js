/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
// [easy][array] 2828. Check if a String Is an Acronym of Words

var isAcronym = function (words, s) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i][0];
  }
  return result === s;
};

console.log(isAcronym(["apple", "banana", "orange"], "applebananaorange"));

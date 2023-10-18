/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
// [easy][string] 1880. Check if Word Equals Summation of Two Words

const charMap = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
};
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const firstNum = firstWord
    .split("")
    .map((char) => charMap[char])
    .join("");
  const secondNum = secondWord
    .split("")
    .map((char) => charMap[char])
    .join("");

  const targetNum = targetWord
    .split("")
    .map((char) => charMap[char])
    .join("");

  return Number(firstNum) + Number(secondNum) === Number(targetNum);
};

console.log(isSumEqual("acb", "cba", "cdb"));

/**
 * @param {string} sString
 * @param {string} tString
 * @return {number}
 */
// [medium][two-pointers] 2486. Append Characters to String to Make Subsequence

var appendCharacters = function (sString, tString) {
  let j = 0;

  for (let i = 0; i < sString.length && j < tString.length; i++) {
    const sChar = sString[i],
      tChar = tString[j];

    if (sChar === tChar) {
      j++;
    }
  }

  return tString.length - j;
};

console.log(appendCharacters((sString = "coaching"), (tString = "coding")));
console.log(appendCharacters((sString = "abcde"), (tString = "a")));
console.log(appendCharacters((sString = "z"), (tString = "abcde")));

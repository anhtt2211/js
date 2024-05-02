/**
 * @param {string} inputStr
 * @param {string[]} dictionary
 * @return {string}
 */
// [medium][two-pointers] 524. Longest Word in Dictionary through Deleting
function findLongestWord(inputStr, dictionary) {
  let answer = "";

  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];

    let inputPointer = 0,
      wordPointer = 0;
    let charCount = 0;

    while (inputPointer < inputStr.length && wordPointer < word.length) {
      if (word[wordPointer] === inputStr[inputPointer]) {
        charCount++;
        wordPointer++;
      }
      inputPointer++;
    }

    if (charCount === word.length) {
      if (
        answer.length < word.length ||
        (answer.length === word.length && word < answer)
      ) {
        answer = word;
      }
    }
  }

  return answer;
}

console.log(
  findLongestWord(
    (s = "abpcplea"),
    (dictionary = ["ale", "apple", "monkey", "plea"])
  )
);
console.log(findLongestWord((s = "abpcplea"), (dictionary = ["a", "b", "c"])));

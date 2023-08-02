/**
 * @param {string} string
 * @return {string}
 */
function reverseWord(s) {
  return s.split("").reverse().join("");
}

var reverseWords = function (string) {
  const digits = string.split(" ");

  const result = [];
  for (const word of digits) {
    let reverse = reverseWord(word);
    result.push(reverse);
  }

  return result.join(" ");
};

console.log(reverseWords((string = "Let's take LeetCode contest")));
console.log(reverseWords((string = "God Ding")));

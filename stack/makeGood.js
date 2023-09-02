/**
 * @param {string} string
 * @return {string}
 */
// [easy][stack] 1544. Make The String Great

var makeGood = function (string) {
  const stack = [];

  for (const char of string) {
    if (
      char.charCodeAt() === stack[stack.length - 1]?.charCodeAt() + 32 ||
      char.charCodeAt() === stack[stack.length - 1]?.charCodeAt() - 32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

console.log(makeGood((s = "leEeetcode")));
console.log(makeGood((s = "abBAcC")));

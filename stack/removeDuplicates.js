/**
 * @param {string} string
 * @return {string}
 */
// [easy][stack] 1047. Remove All Adjacent Duplicates In String

var removeDuplicates = function (s) {
  const stack = [];

  for (const char of s) {
    if (stack.length === 0 || stack[stack.length - 1] !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
};

console.log(removeDuplicates((string = "abbaca")));
console.log(removeDuplicates((string = "azxxzy")));

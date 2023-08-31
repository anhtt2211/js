/**
 * @param {string} string
 * @param {number} k
 * @return {string}
 */
// [medium][stack] 1209. Remove All Adjacent Duplicates in String II

function removeDuplicates(string, k) {
  const stack = [];

  for (const char of string) {
    if (stack.length === 0 || stack[stack.length - 1][0] !== char) {
      stack.push([char, 1]);
    } else {
      stack[stack.length - 1][1]++;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    }
  }

  let result = "";
  for (const [char, count] of stack) {
    result += char.repeat(count);
  }

  return result;
}

console.log(removeDuplicates("abcd", 2)); // Output: "abcd"
console.log(removeDuplicates("deeedbbcccbdaa", 3)); // Output: "aa"
console.log(removeDuplicates("pbbcggttciiippooaais", 2)); // Output: "ps"

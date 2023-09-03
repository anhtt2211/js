/**
 * @param {string} string
 * @return {number}
 */
// [easy][stack] 2696. Minimum String Length After Removing Substrings

/**
 * You can apply some operations to this string where,
 * in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.
 */

var minLength = function (string) {
  const stack = [];

  for (const char of string) {
    if (
      stack.length &&
      (stack[stack.length - 1] + char === "AB" ||
        stack[stack.length - 1] + char === "CD")
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("").length;
};

console.log(minLength((string = "ABFCACDB")));
/**
 * char = A && stack.length === 0 => stack.push(char) => stack = [A]
 * char = B && stack.length !== 0 && char + stack[stack.length - 1] === 'AB' | 'CD' => stack.pop() => stack = []
 * char = F && stack.length === 0 => stack.push(char) => stack = [F]
 * char = C && stack.length !== 0 && char + stack[stack.length - 1] !== 'AB' | 'CD" => stack.push(char)
 */
console.log(minLength((string = "ACBBD")));

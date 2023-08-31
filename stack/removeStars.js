/**
 * @param {string} string
 * @return {string}
 */
// [medium][stack] 2390. Removing Stars From a String

var removeStars = function (string) {
  const stack = [];

  for (const char of string) {
    if (char !== "*") {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
};

console.log(removeStars((string = "leet**cod*e")));
console.log(removeStars((string = "erase*****")));

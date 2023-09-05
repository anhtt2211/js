/**
 * @param {string} s
 * @return {number}
 */
// [medium][stack] 856. Score of Parentheses

var scoreOfParentheses = function (s) {
  const stack = [];
  let currentScore = 0;

  for (const char of s) {
    if (char === "(") {
      stack.push(0);
    } else {
      let score = 0;
      while (stack.length > 0 && stack[stack.length - 1] !== 0) {
        score += stack.pop();
      }

      stack.pop();

      if (score === 0) {
        stack.push(1);
      } else {
        stack.push(2 * score);
      }
    }
  }

  while (stack.length > 0) {
    currentScore += stack.pop();
  }

  return currentScore;
};

var scoreOfParentheses2 = function (s) {
  const stack = [];
  let count = 0;

  for (const char of s) {
    if (char === "(") {
      stack.push(count);
      count = 0; // Reset the count for the inner parentheses
    } else {
      const innerCount = stack.pop();
      count = innerCount + Math.max(2 * count, 1);
    }
  }

  return count;
};

// "(()(()))"
console.log(scoreOfParentheses2("(()(()))"));
/**
 * count = 0;
 * 0: => stack = ["("]
 * 1: => stack = ["(", "("]
 * 2: char === ")" && stack.pop() === "(" => count = 1 => stack = ["("]
 * 3: => stack = ["(", "("]
 * 4: => stack = ["(", "(", "("]
 */

console.log(scoreOfParentheses2((string = "()")));
/**
 * count = 0;
 * 0: char = ( => stack.push(char) => stack = ["("]
 * 1: char = ) => stack.pop() === ( => count++ => stack = []
 */
console.log(scoreOfParentheses2((string = "(())")));
/**
 * count = 0;
 * 0: char = "(" => stack.push(char) => stack = ["("]
 * 1: char = "(" => stack.push(char) => stack = ["(", "("]
 * 2: char = ")" => stack.pop() === "(" => count++ => stack = ["("]
 * 3: char = ")" => stack.pop() === "(" => count++ => stack = []
 * return count
 */
console.log(scoreOfParentheses2((string = "()()")));

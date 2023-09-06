/**
 * @param {string} string
 * @return {number}
 */
// [medium][stack] 227. Basic Calculator II
var calculate = function (string) {
  let stack = [];
  let num = "";
  let sign = null;

  for (let i = 0; i <= string.length; i++) {
    const curr = string[i];

    if (curr === " ") continue;

    if (!isNaN(curr)) num += curr;

    if (isNaN(curr)) {
      num = Number(num);
      switch (sign) {
        case "+":
        case null:
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / num, 10));
          break;
      }

      sign = curr;
      num = "";
    }
  }

  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
};

console.log(calculate((string = "3+2*2")));
console.log(calculate((string = " 3/2 ")));
console.log(calculate((string = " 3+5 / 2 ")));

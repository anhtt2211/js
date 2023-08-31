/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// [easy][stack] 844. Backspace String Compare

var backspaceCompare = function (s, t) {
  const sArr = [];
  const tArr = [];

  for (const char of s) {
    if (char !== "#") {
      sArr.push(char);
    } else {
      sArr.pop();
    }
  }
  for (const char of t) {
    if (char !== "#") {
      tArr.push(char);
    } else {
      tArr.pop();
    }
  }

  const sString = sArr.join("");
  const tString = tArr.join("");

  return sString === tString;
};

// console.log(backspaceCompare((s = "ab#c"), (t = "ad#c")));
console.log(backspaceCompare((s = "ab##"), (t = "c#d#")));

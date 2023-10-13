/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;
  let len = columnTitle.length;

  for (let i = 0; i < len; i++) {
    let char = columnTitle[i];
    let charCode = char.charCodeAt() - 64;

    result += charCode * Math.pow(26, len - i - 1);
  }
  return result;
};

console.log(titleToNumber("A"));

/**
 * @param {string} title
 * @return {string}
 */
// [easy][string] 2129. Capitalize the Title

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var capitalizeTitle = function (title) {
  const digits = title.split(" ");
  const result = [];

  for (let ele of digits) {
    ele = ele.toLowerCase();

    if (ele.length < 3) {
      result.push(ele);
    } else {
      ele = capitalizeFirstLetter(ele);
      result.push(ele);
    }
  }

  return result.join(" ");
};

console.log(capitalizeTitle((title = "capiTalIze tHe titLe")));
console.log(capitalizeTitle((title = "First leTTeR of EACH Word")));
console.log(capitalizeTitle((title = "i lOve leetcode")));

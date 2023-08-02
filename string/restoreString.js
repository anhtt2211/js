/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (string, indices) {
  let result = "";

  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < indices.length; j++) {
      const number = indices[j];
      if (number === i) {
        result = result.concat(string[j]);
      }
    }
  }

  return result;
};

const string1 = "codeleet",
  indices1 = [4, 5, 6, 7, 0, 2, 1, 3];

const result1 = restoreString(string1, indices1);
console.log({ result1 });

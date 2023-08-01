/**
 * @param {string} str
 * @return {character}
 */
var repeatedCharacter = function (str) {
  const set = new Set();

  for (let index = 0; index < str.length; index++) {
    if (set.has(str[index])) {
      return str[index];
    }

    set.add(str[index]);
  }
};

// ------- Solution 2
// var repeatedCharacter = function (str) {
//   const char = {};

//   for (let index = 0; index < str.length; index++) {
//     if (!!char[str[index]]) {
//       return str[index];
//     }

//     char[str[index]] = str[index];
//   }
// };

console.log(repeatedCharacter((str = "abccbaacz")));
console.log(repeatedCharacter((str = "abcdd")));

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (string) {
//   let set = new Set();
//   let left = 0;
//   let maxSize = 0;

//   if (string.length < 2) {
//     return string.length;
//   }

//   for (let i = 0; i < string.length; i++) {
//     while (set.has(string[i])) {
//       set.delete(string[left]);
//       left++;
//     }
//     set.add(string[i]);
//     maxSize = Math.max(maxSize, i - left + 1);
//   }
//   return maxSize;
// };

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (string) {
//   let result = "";
//   let temp = "";

//   if (string.length < 2) {
//     return string.length;
//   }

//   for (let i = 0; i < string.length; i++) {
//     const element = string[i];
//     const isBelong = temp.indexOf(element);

//     if (isBelong === -1 && temp.length > result.length) {
//       result = temp;
//       temp = element;
//     }

//     if (isBelong !== -1) {
//       temp = temp.concat(element);

//       if (i === string.length - 1) {
//         result = temp;
//       }
//     }
//   }

//   return result.length;
// };

var lengthOfLongestSubstring = function (s) {
  var k = 0;
  var maxLength = 0;

  for (i = 0; i < s.length; i++) {
    for (j = k; j < i; j++) {
      if (s[i] === s[j]) {
        k = j + 1;
        break;
      }
    }
    if (i - k + 1 > maxLength) {
      maxLength = i - k + 1;
    }
  }
  return maxLength;
};

// const string1 = "abcabcbb";
// const result1 = lengthOfLongestSubstring(string1);
// console.log({ result1 });

// const string2 = "bbbbb";
// const result2 = lengthOfLongestSubstring(string2);
// console.log({ result2 });

const string3 = "dvdf";
const result3 = lengthOfLongestSubstring(string3);
console.log({ result3 });

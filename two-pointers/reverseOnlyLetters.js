/**
 * @param {string} str
 * @return {string}
 */
// [easy][two-pointers] 917. Reverse Only Letters

const isLetter = (char) => {
  if (("A" <= char && char <= "Z") || ("a" <= char && char <= "z")) {
    return true;
  }
  return false;
};

var reverseOnlyLetters = function (string) {
  let resutl = [];

  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    const leftChar = string[left];
    const rightChar = string[right];

    if (!isLetter(leftChar)) {
      resutl[left] = leftChar;
      left++;
    }
    if (!isLetter(rightChar)) {
      resutl[right] = rightChar;
      right--;
    }

    if (isLetter(leftChar) && isLetter(rightChar)) {
      resutl[left] = rightChar;
      resutl[right] = leftChar;

      left++;
      right--;
    }
  }

  return resutl.join("");
};

console.log(reverseOnlyLetters((string = "ab-cd")));
/**
 * left = a is letter, right = d is letter => db-ca
 * left++; right--;
 * left = b is letter; right = c is letter => dc-bd
 * left = right = - is not letter => dc-bd
 * return;
 */
console.log(reverseOnlyLetters((string = "a-bC-dEf-ghIj")));
/**
 * left = a, right = j => j-bC-dEf-ghIa
 * left = -, right = I => left++
 * left = b, right = I => j-IC-dEf-ghba
 */
console.log(reverseOnlyLetters((string = "Test1ng-Leet=code-Q!")));

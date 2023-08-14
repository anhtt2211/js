/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// [easy][string] 415. Add Strings

var addStrings = function (num1, num2) {
  let pointer1 = num1.length - 1;
  let pointer2 = num2.length - 1;
  let carry = 0;
  let result = "";

  while (pointer1 >= 0 || pointer2 >= 0 || carry > 0) {
    const digit1 = pointer1 >= 0 ? +num1[pointer1] : 0;
    const digit2 = pointer2 >= 0 ? +num2[pointer2] : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    pointer1--;
    pointer2--;
  }

  return result;
};

console.log(addStrings((num1 = "11"), (num2 = "123")));
console.log(addStrings((num1 = "-456"), (num2 = "77")));
console.log(addStrings((num1 = "0"), (num2 = "0")));

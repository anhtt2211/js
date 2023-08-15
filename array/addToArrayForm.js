/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// [easy][array] 989. Add to Array-Form of Integer

var addToArrayForm = function (nums, k) {
  const digits = k.toString().split("").map(Number);

  let pointer1 = nums.length - 1;
  let pointer2 = digits.length - 1;

  let carry = 0;
  const result = [];

  while (pointer1 >= 0 || pointer2 >= 0 || carry > 0) {
    const digit1 = pointer1 >= 0 ? nums[pointer1] : 0;
    const digit2 = pointer2 >= 0 ? digits[pointer2] : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result.unshift(sum % 10);

    pointer1--;
    pointer2--;
  }

  return result;
};

console.log(addToArrayForm((num = [1, 2, 0, 0]), (k = 34)));
console.log(addToArrayForm((num = [2, 7, 4]), (k = 181)));
console.log(addToArrayForm((num = [2, 1, 5]), (k = 806)));

/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][two-pointers] 2562. Find the Array Concatenation Value

var findTheArrayConcVal = function (nums) {
  let concatenationValue = 0;

  while (nums.length > 1) {
    const first = nums[0],
      last = nums[nums.length - 1];
    const tempConcatValue = Number(`${first}${last}`);

    concatenationValue += tempConcatValue;

    nums.shift();
    nums.pop();
  }

  if (nums.length === 1) {
    concatenationValue += nums[0];
  }

  return concatenationValue;
};

var findTheArrayConcVal2 = function (nums) {
  let concatenationValue = 0;

  if (nums.length === 1) {
    return nums[0];
  }

  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    const first = nums[i],
      last = nums[j];
    const tempConcatValue = Number(`${first}${last}`);

    concatenationValue += tempConcatValue;

    i++, j--;
  }

  if (i === j) {
    concatenationValue += nums[i];
  }

  return concatenationValue;
};

console.log(findTheArrayConcVal((nums = [7, 52, 2, 4])));
console.log(findTheArrayConcVal((nums = [5, 14, 13, 8, 12])));

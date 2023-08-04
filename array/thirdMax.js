/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 414. Third Maximum Number

var thirdMax1 = function (nums) {
  const set = new Set(nums);

  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;

  for (const num of set) {
    if (first < num) {
      first = num;
    }
  }

  if (set.size === 1) return nums[0];

  for (const num of set) {
    if (second < num && num < first) {
      second = num;
    }
  }

  if (set.size === 2) {
    return first;
  }

  for (const num of set) {
    if (third < num && num < second) {
      third = num;
    }
  }

  return third;
};

var thirdMax2 = function (nums) {
  const set = new Set(nums);
  const arraySorted = [...set];
  arraySorted.sort((a, b) => a - b);

  if (arraySorted.length < 3) {
    return arraySorted[arraySorted.length - 1];
  }

  return arraySorted[arraySorted.length - 3];
};

console.log(thirdMax2([1, 3, 322, 22]));

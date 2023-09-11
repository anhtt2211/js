/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [medium][two-pointers] 2149. Rearrange Array Elements by Sign

/**
 * Every consecutive pair of integers have opposite signs.
 * For all integers with the same sign, the order in which they were present in nums is preserved.
 * The rearranged array begins with a positive integer.
 */
var rearrangeArray = function (nums) {
  const result = [];
  const index = { positive: 0, negative: 1 };

  for (const num of nums) {
    const idx = num > 0 ? "positive" : "negative";

    result[index[idx]] = num;
    index[idx] += 2;
  }

  return result;
};

console.log(rearrangeArray((nums = [3, 1, -2, -5, 2, -4])));
/**
 * index: {pos: 0, neg: 1}
 *
 * 0: 3 > 0 => index = pos => result[pos] = 3 ~ result = [3] => index.pos += 2 === 2
 * 1: 1 > 0 => index = pos => result[pos] = 1 ~ result = [3, ..., 1] => index.pos += 2 === 4
 * 2: -2 < 0 => index = neg => result[neg] = result[1] = -2 => result = [3, -2, 1] => index.neg = 1 + 2 = 3
 * 3: -5 < 0 => index = neg => result[neg] = result[3] = -5 => result = [3, -2, 1, -5] => index.neg = 2 + 2 = 5
 * 4: 2 > 0 => index = pos => result[pos] = result[4] = 2 => result = [3, -2, 1, -5, 2] => index.pos = 4 + 2 = 6
 * 5: -4 < 0 => index = neg => result[neg] = result[5] = -4 => result = [3, -2, 1, -5, 2, -4] => index.pos = 4 + 2 = 6
 */
console.log(rearrangeArray((nums = [-1, 1])));

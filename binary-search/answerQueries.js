/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
// [easy][binary-search] 2389. Longest Subsequence With Limited Sum

var answerQueries = function (nums, queries) {
  nums = nums.sort((a, b) => a - b);

  const pre = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    pre[i] = nums[i] + pre[i - 1];
  }

  const answers = queries.map((q) => {
    let low = 0,
      high = pre.length;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);

      if (pre[mid] <= q) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  });

  return answers;
};

console.log("====================================");
console.log(answerQueries((nums = [4, 5, 2, 1]), (queries = [3, 10, 21])));
console.log("====================================");

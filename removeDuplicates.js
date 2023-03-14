/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
  const set = new Set(nums);
  const newArr = Array.from(set);

  for (let i = 0; i < newArr.length; i++) {
    nums[i] = newArr[i];
  }
  return newArr.length;
};

const nums = [1, 1, 2];

console.log(removeDuplicates(nums));

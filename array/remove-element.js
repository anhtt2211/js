/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    nums = nums.filter(no => no !== val);
    return nums;
};

const nums = [3,2,2,3]
const val = 3;

console.log(removeElement(nums, val));
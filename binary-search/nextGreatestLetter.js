/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// [easy][binary-search] 744. Find Smallest Letter Greater Than Target
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (letters[mid] <= target) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (left === letters.length) {
    return letters[0];
  }

  return letters[left];
};

const letters = ["c", "f", "j"],
  target = "a";

const output = nextGreatestLetter(letters, target);
console.log("🚀 ~ output:", output);

/**
 * @param {number[]} skill
 * @return {number}
 */
// [medium][two-pointers] 2491. Divide Players Into Teams of Equal Skill

var dividePlayers = function (skill) {
  if (skill.length === 2) {
    return skill[0] * skill[1];
  }

  skill.sort((a, b) => a - b);

  let result = 0;
  let left = 0,
    right = skill.length - 1;

  let sum = skill[left] + skill[right];
  while (left < right) {
    const currentSum = skill[left] + skill[right];

    if (sum !== currentSum) {
      return -1;
    } else {
      result += skill[left] * skill[right];
      left++, right--;
    }
  }

  return result;
};

console.log(dividePlayers((skill = [3, 2, 5, 1, 3, 4])));
console.log(dividePlayers((skill = [3, 4])));
console.log(dividePlayers((skill = [1, 1, 2, 3])));

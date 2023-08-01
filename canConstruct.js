/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

/**
 * Given two strings ransomNote and magazine,
 * return true if ransomNote can be constructed by using the letters from magazine
 * and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */

var canConstruct = function (ransomNote, magazine) {
  const charMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    charMap.set(magazine[i], (charMap.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const value = charMap.get(ransomNote[i]);
    if (value && value > 0) {
      charMap.set(ransomNote[i], value - 1);
    } else {
      return false;
    }
  }

  return true;
};

// console.log(canConstruct((ransomNote = "a"), (magazine = "b"))); // false
// console.log(canConstruct((ransomNote = "aa"), (magazine = "ab"))); // false
console.log(canConstruct((ransomNote = "aa"), (magazine = "aab"))); // true

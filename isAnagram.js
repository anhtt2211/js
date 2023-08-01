/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function sortStringAlphabetically(inputString) {
  let charArray = inputString.split("");

  charArray.sort();

  let sortedString = charArray.join("");

  return sortedString;
}

var isAnagram = function (s, t) {
  const s_length = s.length,
    t_length = t.length;
  if (s_length !== t_length) {
    return false;
  }

  const s_string = sortStringAlphabetically(s);
  const t_string = sortStringAlphabetically(t);

  for (let i = 0; i < s_string.length; i++) {
    if (s_string[i] !== t_string[i]) {
      return false;
    }
  }

  return true;
};

const s1 = "anagram",
  t1 = "nagaram";

const result1 = isAnagram(s1, t1);
console.log({ result1 });

const s2 = "rat",
  t2 = "car";

const result2 = isAnagram(s2, t2);
console.log({ result2 });

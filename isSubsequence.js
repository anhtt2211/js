/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  const t_length = t.length;
  let subsequence = 0;

  for (let i = 0; i < t_length; i++) {
    const s_character = s[subsequence],
      t_character = t[i];
    if (s_character === t_character) {
      subsequence++;
    }
  }

  return subsequence === s.length;
};

const s1 = "acb",
  t1 = "ahbgdc";
const result1 = isSubsequence(s1, t1);
console.log({ result1 });

// const s2 = "axc",
//   t2 = "ahbgdc";
// const result2 = isSubsequence(s2, t2);
// console.log({ result2 });

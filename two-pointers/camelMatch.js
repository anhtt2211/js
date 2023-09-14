/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
// [medium][two-pointers] 1023. Camelcase Matching

function match(queryArr, patternArr) {
  let j = 0;

  for (let i = 0; i < queryArr.length; i++) {
    if (j < patternArr.length && queryArr[i] === patternArr[j]) {
      j++;
    } else if (queryArr[i] >= "A" && queryArr[i] <= "Z") {
      return false;
    }
  }

  return j === patternArr.length;
}

var camelMatch = function (queries, pattern) {
  const anwsers = [];

  const patternArr = pattern.split("");
  for (const query of queries) {
    const isMatch = match(query.split(""), patternArr);
    anwsers.push(isMatch);
  }

  return anwsers;
};

console.log(
  camelMatch(
    (queries = [
      "FooBar",
      "FooBarTest",
      "FootBall",
      "FrameBuffer",
      "ForceFeedBack",
    ]),
    (pattern = "FB")
  )
);
console.log(
  camelMatch(
    (queries = [
      "FooBar",
      "FooBarTest",
      "FootBall",
      "FrameBuffer",
      "ForceFeedBack",
    ]),
    (pattern = "FoBa")
  )
);

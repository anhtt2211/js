/**
 * @param {number[]} score
 * @return {string[]}
 */
// [easy][array] 506. Relative Ranks

const dist = {
  1: "Gold Medal",
  2: "Silver Medal",
  3: "Bronze Medal",
};

/** Solution 1 */
var findRelativeRanks1 = function (score) {
  const hasMap = new Map();
  const result = [];

  for (let i = 0; i < score.length; i++) {
    let rank = 1;
    for (let j = 0; j < score.length; j++) {
      if (score[i] < score[j]) {
        rank++;
      }
    }

    hasMap.set(score[i], rank);
  }

  for (const [_key, value] of hasMap) {
    if (dist[value]) {
      result.push(dist[value]);
    } else {
      result.push(value.toString());
    }
  }

  return result;
};

/** Solution 2 optimize */
var findRelativeRanks2 = function (score) {
  const newScore = [...score].sort((a, b) => b - a);
  const hasmap = new Map();

  for (let i = 0; i < newScore.length; i++) {
    hasmap.set(newScore[i], i);
  }

  for (let i = 0; i < score.length; i++) {
    const rank = hasmap.get(score[i]) + 1;

    if (dist[rank]) {
      score[i] = dist[rank];
    } else {
      score[i] = rank.toString();
    }
  }
  return score;
};

// console.log(findRelativeRanks((score = [5, 4, 3, 2, 1])));
console.log(findRelativeRanks2((score = [3, 10, 8, 9, 4])));

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
// [medium][two-pointers] 2410. Maximum Matching of Players With Trainers

function matchPlayersAndTrainers(players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let N = players.length;
  let M = trainers.length;

  let j = 0;
  let ans = 0;

  for (let i = 0; i < N && j < M; i++) {
    let need = players[i];

    while (trainers[j] < need) {
      j++;
      if (j === M) return ans;
    }

    if (trainers[j] >= need) {
      ans++;
      j++;
    }
  }

  return ans;
}

// Example usage:
const players = [5, 3, 7, 2];
const trainers = [4, 6, 2, 8];
const result = matchPlayersAndTrainers(players, trainers);

console.log(result); // This will print the number of matches.

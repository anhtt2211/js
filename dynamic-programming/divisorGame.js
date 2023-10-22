/**
 * @param {number} n
 * @return {boolean}
 */
// [easy][dp] 1025. Divisor Game

// var divisorGame = function (n) {
//   if (n === 2) return true;
//   if (n === 3) return false;

//   for (let i = 1; i < n; i++) {
//     if (n % i === 0 && !divisorGame(n - i)) {
//       return true;
//     }
//   }

//   return false;
// };

/**
 * @param {number} n
 * @return {boolean}
 */
// [easy][dp] 1025. Divisor Game

var divisorGame = function (n) {
  // Initialize a boolean array to store the results for each value from 1 to n
  const dp = new Array(n + 1).fill(false);

  // Base cases
  dp[2] = true;
  dp[3] = false;

  for (let i = 4; i <= n; i++) {
    // Check if there's any divisor 'x' of 'i' such that dp[i-x] is false
    for (let x = 1; x < i; x++) {
      if (i % x === 0 && !dp[i - x]) {
        dp[i] = true;
        break; // Break the loop once we find a winning move
      }
    }
  }

  return dp[n];
};

console.log(divisorGame(196));

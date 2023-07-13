/**
 * @param {number} n
 * @return {number}
 */
/**
 * Solution 1
 */
// var climbStairs = function (n) {
//   if (n < 2) {
//     return 1;
//   }

//   let firstStep = 1;

//   let secondStep = 1;

//   let thirdStep = 0;

//   for (let i = 2; i <= n; i++) {
//     thirdStep = firstStep + secondStep;

//     firstStep = secondStep;

//     secondStep = thirdStep;
//   }

//   return thirdStep;
// };

/**
 * Solution 2
 */

/**
 * Explanation
If we start making outputs for n starting from 1:
n = 1, Output: 1
1 step

n = 2, Output: 2
1 step + 1 step
2 steps

n = 3, Output: 3
1 step + 1 step + 1 step
1 step + 2 steps
2 steps + 1 step

n = 4, Output: 5
1 step + 1 step + 1 step + 1 step
1 step + 1 step + 2 steps
1 step + 2 steps + 1 step
2 steps + 1 step + 1 step
2 steps + 2 steps
On a closer look, we can see that these 5 ways are actually:

1 step + (1st case of n = 3)
1 step + (2nd case of n = 3)
1 step + (3rd case of n = 3)
2 steps + (1st case of n = 2)
2 steps + (2nd case of n = 2)
i.e. the output is: (Output for n = 3) + (Output for n = 2)

n = 5, Output: 8
1 step + 1 step + 1 step + 1 step + 1 step
1 step + 1 step + 1 step + 2 steps
1 step + 1 step + 2 steps + 1 step
1 step + 2 steps + 1 step + 1 step
1 step + 2 steps + 2 steps
2 steps + 1 step + 1 step + 1 step
2 steps + 1 step + 2 steps
2 steps + 2 steps + 1 step
Similarly again, we can see that these 8 ways are actually:

1 step + (1st case of n = 4)
1 step + (2nd case of n = 4)
1 step + (3rd case of n = 4)
1 step + (4th case of n = 4)
1 step + (5th case of n = 4)
2 steps + (1st case of n = 3)
2 steps + (2nd case of n = 3)
2 steps + (3rd case of n = 3)
i.e. the output is: (Output for n = 4) + (Output for n = 3)

Formula
So from above cases, we can see that the output for n = 1 and n = 2 is n. And for n = 3 or > 3 it is: (Output for n - 1) + (Output for n - 2).

Because, for any given n stairs (n >= 3),

if we take 1 step, then we will be left with n - 1 stairs.
and if we take 2 steps, then we will be left with n - 2 stairs.
So, our output will always be:
distinct ways for n stairs = distinct ways for n-1 + distinct ways for n-2

As our function name is climbStairs, so we can make the formaula using that:
climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  return climbStairs(n - 1) + climbStairs(n - 2);
};

const n = 3;
const result = climbStairs(n);

console.log({ result });
